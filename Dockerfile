FROM node:19-alpine as development

# Create app directory
WORKDIR /app

# Install app dependencies
RUN yarn install
RUN yarn global add ts-node

COPY . .
