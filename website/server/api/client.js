/* eslint no-console: 0 */
const { Router } = require('express');

const router = Router();

router.get('/guilds', checkAuth, (req, res) => {
  res.status(200).json(req.user.guilds);
});

router.get('/guilds/:guildID', checkAuth, (req, res) => {
  res.status(200).json({
    memberCount: 'Placeholder',
    textChannels: 'Placeholder',
    voiceChannels: 'Placeholder',
    categoryChannels: 'Placeholder'
  });
});

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(200).json({
    code: '12',
    message: 'Not authorized.'
  });
}

module.exports = router;
