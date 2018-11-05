FROM node:8.12.0

WORKDIR /usr/src/gunzip

COPY . /usr/src/gunzip

CMD [ "node", "src/index.js"]