FROM joseluisq/static-web-server:2-alpine

COPY src /public
COPY config.toml config.toml

CMD ["static-web-server"]
