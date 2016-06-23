FROM node:latest

RUN mkdir /src
WORKDIR /src

ADD app/package.json /src/package.json
RUN npm install

ADD ./app /src

EXPOSE 3000

CMD node index.js
