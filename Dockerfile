FROM nikolaik/python-nodejs:python3.9-nodejs14-alpine

# Create working directory for website
WORKDIR /opt/website

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install --force --legacy-peer-deps

# Copy rest of the files
COPY . .

# Buld the website
RUN yarn build

# Start the website
CMD ["yarn", "start"]
