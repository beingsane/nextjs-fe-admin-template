FROM node:14.16.0

# Create app directory
RUN mkdir /src
WORKDIR /src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production

# Bundle app source
COPY . .

# Eslint check
RUN npm run lint

RUN npm run build

EXPOSE 3000

CMD npm start