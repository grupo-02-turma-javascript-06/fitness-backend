FROM node:22.13.0-alpine

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json package.lock* ./
RUN npm install --frozen-lockfile

COPY --chown=node:node . .

CMD ["npm", "run", "start:dev"]
