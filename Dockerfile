
# build stage
FROM node:18.8-alpine3.16 as build

WORKDIR /usr/src/docker-react-sample

COPY package*.json ./

RUN yarn install --frozen-lockfile --production && yarn cache clean

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]

# production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
