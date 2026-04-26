FROM node:24-slim

WORKDIR /workspace

RUN corepack enable

COPY package.json yarn.lock ./
COPY common/node-service-kit/package.json ./common/node-service-kit/package.json
COPY services/odoo-integration-service/package.json ./services/odoo-integration-service/package.json

RUN corepack yarn install --frozen-lockfile

COPY common/node-service-kit ./common/node-service-kit
COPY services/odoo-integration-service ./services/odoo-integration-service

WORKDIR /workspace/services/odoo-integration-service

RUN corepack yarn build

ENV NODE_ENV=production
ENV PORT=7200

EXPOSE 7200

CMD ["node", "dist/index.js"]
