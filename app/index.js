var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

var client = require('./lib/build.js')(
  process.env["UNITY_API_TOKEN"],
  process.env["UNITY_ORG_ID"],
  process.env["UNITY_PROJECT_ID"],
  process.env["UNITY_BUILD_TARGET_ID"]
);

controller.spawn({
  token: process.env["SLACK_API_TOKEN"],
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});

controller.hears(['build'], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
    client.build();
});

controller.hears(['cancel'], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
    client.cancel();
});

controller.hears(['url'], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
    response = client.download_urls();
    response.on('data', function(data) {
      json = JSON.parse(data);
      if (json.length > 0) {
        url = json[0].links.download_primary.href;
        bot.reply(message, url.toString());
      }
    });
});
