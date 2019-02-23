FROM node:latest

# Create base directories
RUN mkdir -p /usr/src/site
RUN mkdir -p /usr/src/site/website
RUN mkdir -p /usr/src/site/server

# Install app dependencies and build frontend
WORKDIR /usr/src/website
COPY website/package.json .
RUN npm install

# Build backend
WORKDIR /usr/src/server
COPY server/package.json .
RUN npm install

# Copy rest of the files and build the server
WORKDIR /usr/src/site
COPY . /usr/src/site

WORKDIR /usr/src/website
RUN npm run build

# Start the application
WORKDIR /usr/src/server
CMD ["npm", "start"]