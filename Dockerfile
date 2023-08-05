FROM node:16-alpine

WORKDIR /usr/src/spacex-api

COPY package*.json ./

RUN yarn install
RUN yarn global add nodemon

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]
