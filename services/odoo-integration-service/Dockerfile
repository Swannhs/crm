FROM node:24-slim

WORKDIR /workspace

RUN corepack enable

COPY package.json ./
# In a real workspace, you'd copy the lock file too
# COPY yarn.lock ./ 

RUN corepack yarn install

COPY . .

RUN corepack yarn build

ENV NODE_ENV=production
ENV PORT=7200

EXPOSE 7200

CMD ["node", "dist/main.js"]
