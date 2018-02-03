# docker-nodejs-app
This repository dockerizes a Node JS application.

### Dockerfile
```
FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8090

CMD [ "npm", "start" ]
```

### Reference
#### https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
#### https://buddy.works/guides/how-dockerize-node-application
