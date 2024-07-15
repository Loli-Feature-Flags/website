FROM node:22-alpine3.19 as build
RUN apk add git
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY .git/ ./.git/
COPY public public
COPY docs docs
ARG NODE_ENV=production
ENV NODE_ENV=production
RUN npm run docs:build

FROM joseluisq/static-web-server:2-alpine

COPY --from=build /app/docs/.vuepress/dist /public
COPY config.toml config.toml

CMD ["static-web-server"]
