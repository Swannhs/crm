FROM node:24-alpine

WORKDIR /app

# Install dependencies first for caching
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
