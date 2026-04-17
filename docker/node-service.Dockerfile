FROM node:24-alpine

ARG SERVICE_PATH

WORKDIR /repo

# Workspaces install (only the service + shared kit).
COPY package.json package-lock.json ./
COPY common/node-service-kit ./common/node-service-kit
COPY ${SERVICE_PATH}/package.json ./${SERVICE_PATH}/package.json

RUN npm ci -w ${SERVICE_PATH} --omit=dev

COPY ${SERVICE_PATH} ./${SERVICE_PATH}

ENV NODE_ENV=production

WORKDIR /repo/${SERVICE_PATH}
CMD ["node", "src/index.js"]

