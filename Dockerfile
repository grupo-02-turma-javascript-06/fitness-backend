FROM node:22.13.0-alpine

USER node
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

CMD ["npm", "run", "start:dev"]
