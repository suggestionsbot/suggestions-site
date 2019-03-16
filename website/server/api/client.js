/* eslint no-console: 0 */
const { Router } = require('express');
const { Permissions } = require('discord.js');
const discord = require('../discord');

const router = Router();

router.get('/guilds', checkAuth, (req, res) => {
  const guilds = [];
  req.user.guilds.forEach(g => {
    const guild = discord.guilds.get(g.id);
    const permsOnGuild = new Permissions(g.permissions);

    if (guild && guild.available) guilds.push(guild);
    if (!guild && permsOnGuild.has('MANAGE_GUILD')) guilds.push(g);
  });

  res.status(200).json(guilds);
});

router.get('/guilds/:guildID', checkAuth, (req, res) => {
  const { guildID } = req.params;

  const guild = discord.guilds.get(guildID);
  if (!guild) {
    return res.status(200).json({
      code: 11,
      message: 'This guild is not available'
    });
  }

  const data = Object.assign(guild, {
    textChannels: guild.channels.filter(c => c.type === 'text').size,
    voiceChannels: guild.channels.filter(c => c.type === 'voice').size,
    categoryChannels: guild.channels.filter(c => c.type === 'category').size
  });

  res.status(200).json(data);
});

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(200).json({
    code: '12',
    message: 'Not authorized.'
  });
}

module.exports = router;
