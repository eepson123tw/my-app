
# build stage
FROM node:17

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]

# production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
