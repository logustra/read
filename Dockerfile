# Stage Base
FROM node:12.22.3-alpine AS base
RUN apk add --update --no-cache python make g++
RUN npm install pnpm --global
RUN pnpm install node-gyp --global
WORKDIR /app

# Stage Dependencies
FROM base AS dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --production

# Stage Build
FROM base AS build
COPY . .
RUN pnpm install
RUN pnpm build

# Stage Server
FROM node:12.22.3-alpine as server
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server
EXPOSE 9900
CMD ["node", "server"]
