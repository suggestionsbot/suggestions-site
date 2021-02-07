FROM node:latest

# Create base directories
RUN mkdir -p /usr/src/site
RUN mkdir -p /usr/src/site/website

# Install app dependencies
WORKDIR /usr/src/site/website
COPY website/package.json .
RUN npm install --force --legacy-peer-deps

# Copy rest of the files and build the server
WORKDIR /usr/src/site
COPY . /usr/src/site

WORKDIR /usr/src/site/website
RUN npm run build

# Start the application
CMD ["npm", "start"]
