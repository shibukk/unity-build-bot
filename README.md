# unity-build-bot
Build a project of Unity by Slack bot.

## Installation
1. Register your project of Unity at [Unity Cloud Build](https://unity3d.com/jp/services/cloud-build).
  
1. Install Docker Toolbox on your machine.
  
1. Create bot in [Slack](https://my.slack.com/services/new/bot).
  
1. Set up this repository.

  ```bash
  $ git clone git@github.com:shibukk/unity-build-bot.git
  $ cp .env.sample .env
  $ vim .env
  ```
1. Run docker command.

  ```bash
  $ docker-machine create unity-cloud
  $ eval $(docker-machine env unity-cloud)
  $ docker-compose build
  $ docker-compose up
  ```

## Usage
Invite bot your public channel on Slack.  
And put command this.

```
@your_bot build  // Build your project of Unity
@your_bot cancel // Cancel recent build command
@your_bot url    // Show recent download url
```

### Add command
If you want to add bot command, edit `app/index.js` file.  
It is based upon [botkit](https://github.com/howdyai/botkit).

```js
controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
  bot.reply(message, 'Hello yourself.');
});
```

## Contributing
1. Fork it ( https://github.com/shibukk/unity-build-bot/fork )
1. Create your feature branch (git checkout -b my-new-feature)
1. Commit your changes (git commit -am 'Add some feature')
1. Push to the branch (git push origin my-new-feature)
1. Create new Pull Request

## License
Copyright (c) 2016 shibukk. Licensed under MIT.
