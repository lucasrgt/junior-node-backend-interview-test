FROM node:16-alpine

WORKDIR /usr/src/spacex-api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start" ]
