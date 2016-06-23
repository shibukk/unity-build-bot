FROM node:6.2.2

RUN mkdir /src
WORKDIR /src

ADD app/package.json /src/package.json
RUN npm install

ADD ./app /src

EXPOSE 3000

CMD token=${SLACK_API_TOKEN} node slack_bot.js