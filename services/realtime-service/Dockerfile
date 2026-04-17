FROM node:24-alpine

WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

COPY src ./src

ENV NODE_ENV=production
ENV PORT=7030

EXPOSE 7030
CMD ["node", "src/index.js"]

