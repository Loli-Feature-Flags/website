FROM oven/bun:alpine as build
RUN apk add git
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY .git/ ./.git/
COPY docs docs
ARG NODE_ENV=production
ENV NODE_ENV=production
RUN bun run build

FROM joseluisq/static-web-server:2-alpine

COPY --from=build /app/docs/.vitepress/dist /public
COPY config.toml config.toml

CMD ["static-web-server"]
