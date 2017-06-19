// Description:
//   General DDD guff
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot - blows a kiss
//
// Author:
//   Chris D Brown (@ChrisDeeBrown

module.exports = (robot) => {
  robot.hear(new RegExp(robot.name, 'i'), (res) => {
    if (robot.adapterName === 'slack') {
      robot.adapter.client.web.reactions.add(
        'kissing_heart',
        { channel: res.message.room, timestamp: res.message.id },
      );
    }
  });
};
