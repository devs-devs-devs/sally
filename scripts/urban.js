// Description:
//   Define terms via Urban Dictionary
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot what is <term>?      - Searches Urban Dictionary and returns definition
//   hubot urban <term>         - Searches Urban Dictionary and returns definition
//   hubot urban define <term>  - Searches Urban Dictionary and returns definition
//   hubot urban example <term> - Searches Urban Dictionary and returns example
//
// Author:
//   Travis Jeffery (@travisjeffery)
//   Robbie Trencheny (@Robbie)
//
// Contributors:
//   Chris D Brown (@ChrisDeeBrown)

const urbanDictionary = (msg, query, callback) => {
  msg.http(`http://api.urbandictionary.com/v0/define?term=${escape(query)}`)
    .get()((err, res, body) => {
      const result = JSON.parse(body);

      if (result.list.length) {
        return callback(true, result.list[0], result.sounds);
      }

      return callback(false);
    });
};

module.exports = (robot) => {
  robot.respond(new RegExp('what ?is ([^?]*)[?]*', 'i'), (msg) => {
    urbanDictionary(msg, msg.match[1], (found, entry, sounds) => {
      if (!found) {
        msg.send(`I don't know what ${msg.match[1]} is`);
        return;
      }

      msg.send(entry.definition);

      if (sounds && sounds.length) {
        msg.send(sounds.join(' '));
      }
    });
  });

  robot.respond(new RegExp('(urban)( define)?( example)? (.*)', 'i'), (msg) => {
    urbanDictionary(msg, msg.match[4], (found, entry, sounds) => {
      if (!found) {
        msg.send(`${msg.match[4]} not found`);
        return;
      }

      if (msg.match[3]) {
        msg.send(entry.example);
      } else {
        msg.send(entry.definition);
      }

      if (sounds && sounds.length) {
        msg.send(sounds.join(' '));
      }
    });
  });
};
