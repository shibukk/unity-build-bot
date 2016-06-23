var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

controller.spawn({
  token: process.env["SLACK_API_TOKEN"],
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});

controller.hears(['hello','hi'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"Hello.");
});
