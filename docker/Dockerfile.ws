FROM oven/bun:latest

WORKDIR /app

COPY ./packages ./packages
COPY ./package.json ./package.json
COPY ./bun.lock ./bun.lock
COPY ./turbo.json ./turbo.json

COPY ./apps/ws/package.json ./apps/ws/package.json

RUN bun install

COPY ./apps/ws ./apps/ws
RUN bun db:generate

EXPOSE 8081

CMD [ "bun", "start:ws" ]