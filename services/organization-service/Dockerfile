FROM node:24-alpine

WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

COPY src ./src

ENV NODE_ENV=production
ENV PORT=7010

EXPOSE 7010
CMD ["node", "src/index.js"]

