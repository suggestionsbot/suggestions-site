/* eslint no-console: 0 */
const { Router } = require('express');
const passport = require('passport');
const { scopes } = require('../config');

const router = Router();

router.get('/login', passport.authenticate('discord', {
  scope: scopes
}), (req, res) => {});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/callback', passport.authenticate('discord', {
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/guilds');
});

module.exports = router;
