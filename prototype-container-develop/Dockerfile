# lint and test stage
FROM node:14.5 as lint-test-stage
WORKDIR /app
COPY package*.json ./
# RUN apt-get update && apt-get install python3 && npm install
RUN npm ci
COPY . .
RUN npm run lint --max-warnings=0
RUN npm run test:unit

# build stage
FROM node:14.5-alpine as build-stage
WORKDIR /app
COPY package*.json ./
# canvas is only used for testing and requires a lot of dependencies
RUN npm remove canvas && npm ci
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
