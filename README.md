# unity-build-bot
build a project of unity by slack bot

# Usage
1. Create Bot in slack

2. Set up this repo

```bash
$ git clone git@github.com:shibukk/unity-build-bot.git
$ mv .env.sample .env
$ vim .env
```

3. Run docker

```bash
$ docker-machine create unity-cloud
$ eval $(docker-machine env unity-cloud)
$ docker-compose build
$ docker-compose up
```