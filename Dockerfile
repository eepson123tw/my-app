
# build stage
FROM node:18.8-alpine3.16 AS builder

WORKDIR /www

COPY . .

RUN  rm -rf node_modules && yarn install --frozen-lockfile --production && yarn cache clean && yarn run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]

# production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
