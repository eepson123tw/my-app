
# build stage
FROM node:18.8-alpine3.16 AS builder

WORKDIR /app

COPY . .

RUN  rm -rf node_modules && yarn install --frozen-lockfile --production && yarn cache clean && yarn run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]

# FROM nginx
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 

# COPY --from=build /app/build /usr/share/nginx/html 
