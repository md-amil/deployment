FROM node:20-alpine as base

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --immutable

COPY . .

RUN yarn build
RUN rm -rf .next/cache/*
EXPOSE 3000

CMD ["yarn", "start"]
