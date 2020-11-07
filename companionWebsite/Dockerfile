FROM node:12.18.4
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 3001
ENTRYPOINT ["npm", "run", "dev"]
