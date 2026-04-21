FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY prisma ./prisma
RUN npx prisma generate

COPY src ./src
COPY tsconfig.json ./

RUN npm run build

ENV NODE_ENV=production
ENV PORT=7160

EXPOSE 7160

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]
