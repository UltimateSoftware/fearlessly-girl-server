FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -q -D
COPY . /usr/src/app

ENV NODE_ENV production

CMD [ "npm", "run", "start"]