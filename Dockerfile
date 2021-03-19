FROM node:14.16.0

# Create app directory
RUN mkdir /src
WORKDIR /src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn

# Bundle app source
COPY . .

RUN yarn build

RUN yarn add --dev typescript


EXPOSE 80

CMD yarn start