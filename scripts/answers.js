// Description:
//   Hubot answers yes/no questions directed at it.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot [yes/no question]?
//
// Author:
//   Chris D Brown (@ChrisDeeBrown)

const questions = require('./data/questions.json');
const answers = require('./data/answers.json');

const getTextAnswer = (msg) => {
  msg.send(answers[Math.floor(Math.random() * answers.length)]);
};

const getGifAnswer = (msg) => {
  msg.http('https://yesno.wtf/api').get()((err, res, body) => {
    const data = JSON.parse(body);
    msg.send(data.image);
  });
};

module.exports = (robot) => {
  robot.respond(new RegExp(questions.join('|'), 'gi'), (msg) => {
    if (Math.random() > 0.2) {
      getTextAnswer(msg);
    } else {
      getGifAnswer(msg);
    }
  });
};
