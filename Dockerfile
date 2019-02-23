FROM node:latest

# Create base directories
RUN mkdir -p /usr/src/site
RUN mkdir -p /usr/src/site/website
RUN mkdir -p /usr/src/site/server

# Install app dependencies and build frontend
WORKDIR /usr/src/site/website
COPY website/package.json .
RUN npm install

# Build backend
WORKDIR /usr/src/site/server
COPY server/package.json .
RUN npm install

# Copy rest of the files and build the server
WORKDIR /usr/src/site
COPY . /usr/src/site

WORKDIR /usr/src/site/website
RUN npm run build

# Move to server folder and start the application
WORKDIR /usr/src/site/server
CMD ["npm", "start"]