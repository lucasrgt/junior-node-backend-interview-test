FROM node:16-alpine

WORKDIR /usr/src/spacex-api

COPY package*.json ./

RUN yarn install
RUN yarn install nodemon --global

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]
