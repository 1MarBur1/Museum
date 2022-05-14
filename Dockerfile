FROM node:16-alpine as builder

WORKDIR /code

COPY yarn.lock package.json ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:16-alpine

WORKDIR /code

COPY --from=builder /code/.next/standalone .
COPY --from=builder /code/.next .next

EXPOSE 3000

CMD node server.js
