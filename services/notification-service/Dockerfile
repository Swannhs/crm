FROM node:24-alpine

WORKDIR /app
COPY package.json ./
RUN apk add --no-cache openssl libc6-compat
RUN npm install --omit=dev

COPY src ./src

ENV NODE_ENV=production
CMD ["node", "src/index.js"]

