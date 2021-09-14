const { Strategy } = require('passport-discord');
const { scopes } = require('./config');
require('dotenv').config();

module.exports = (passport, refresh) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  const discord = new Strategy({
    clientID: process.env.NUXT_DISCORD_CLIENT_ID,
    clientSecret: process.env.NUXT_DISCORD_CLIENT_SECRET,
    callbackURL: process.env.NUXT_DISCORD_CALLBACK_URL,
    scope: scopes
  }, (accessToken, refreshToken, profile, done) => {
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;

    process.nextTick(function () {
      return done(null, profile);
    });
  });

  passport.use(discord);
  refresh.use(discord);
};
