FROM node:14-alpine3.14

WORKDIR /usr/src/app/g20
COPY . /usr/src/app/g20

RUN rm -rf .git
RUN rm -rf Dockerfile

RUN npm install
RUN npm run build

EXPOSE 3001
CMD npm run start
