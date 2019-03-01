/* eslint no-console: 0 */
const express = require('express');
const session = require('express-session');
const consola = require('consola');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const refresh = require('passport-oauth2-refresh');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const uuid = require('uuid');
const cors = require('cors');
const helmet = require('helmet');
const { Nuxt, Builder } = require('nuxt');
require('dotenv').config();

const config = require('../nuxt.config.js');
const { db, dbOptions } = require('./config');
const api = require('./api');

const app = express();

// Import and Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === 'production');

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(db, dbOptions);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection successfully opened!', 'ready');
});

mongoose.connection.on('err', err => {
  console.error(`Mongoose connection error: \n ${err.stack}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

const dbConnection = mongoose.connection;

app.use(session({
  genid: (req) => {
    return uuid();
  },
  name: process.env.NUXT_DISCORD_SECRET_NAME,
  secret: process.env.NUXT_DISCORD_SECRET_NAME,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 },
  store: new MongoStore({ mongooseConnection: dbConnection })
}));
app.use(passport.initialize());
app.use(passport.session());

require('./auth_config')(passport, refresh);

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use('/', api);

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
