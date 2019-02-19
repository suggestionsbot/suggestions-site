FROM node:latest

# Create directory and copy files
RUN mkdir -p /usr/src/site
WORKDIR /usr/src/site
COPY . /usr/src/test

# Build files for production
WORKDIR /usr/src/site/website
RUN npm run build

# Install dependencies for express server
WORKDIR /usr/src/site/server
RUN npm install

# Start the application
CMD ["npm", "start"]
