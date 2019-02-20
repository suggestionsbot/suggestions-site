FROM node:latest

# Create base directories
RUN mkdir -p /usr/src/site
RUN mkdir -p /usr/src/site/website
RUN mkdir -p /usr/src/site/server

# Install app dependencies and build frontend
WORKDIR /usr/src/website
COPY website/package.json .
RUN npm install
RUN npm run build

# Build backend
WORKDIR /usr/src/server
COPY server/package.json .
RUN npm install

COPY . /usr/src/site

# Start the application
CMD ["npm", "start"]