FROM node:20 AS builder
WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080/api

RUN \
    npm ci &&\
    npm run build &&\
    npm run test

FROM nginx:1.25-alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
