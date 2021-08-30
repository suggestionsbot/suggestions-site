FROM nikolaik/python-nodejs:python3.9-nodejs14-alpine  AS base

# create working directory for website
WORKDIR /opt/website

### dependenices & builder
FROM base AS builder

# install make
RUN apk add g++ make

# install production dependencies
COPY website/package.json website/yarn.lock ./

RUN yarn install --force --legacy-peer-deps
RUN cp -RL node_modules /tmp/node_modules

### runner
FROM base

# copy runtime dependencies
COPY --from=builder /tmp/node_modules node_modules

# copy remaining files
COPY website .

# build the application
RUN yarn build

# start the application
CMD ["yarn", "start"]
