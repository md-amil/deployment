FROM node:20-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --immutable

COPY . .
RUN yarn build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf