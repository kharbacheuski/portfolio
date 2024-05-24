FROM node:alpine AS deps

WORKDIR /usr/app
COPY . /usr/app
RUN npm i
RUN npm run build

CMD ["npm", "start"]