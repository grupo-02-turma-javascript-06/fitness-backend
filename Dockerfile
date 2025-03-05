FROM node:22.13.0-alpine

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm install

CMD ["npm", "run", "start:dev"]
