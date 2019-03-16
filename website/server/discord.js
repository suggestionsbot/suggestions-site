/* eslint no-console: 0 */
const util = require('util');
const { Client } = require('discord.js');

const client = new Client({ disableEveryone: true });

const dcPrefix = 'DISCORD |';

client.on('ready', () => console.log(`${dcPrefix} Logged in as ${client.user.tag} (${client.user.id})`));
client.on('error', err => console.error(dcPrefix, ' An error was received from Discord.js', util.inspect(err)));
client.on('disconnect', () => console.log(`${dcPrefix} Client disconnected...`));
client.on('reconnecting', () => console.log(dcPrefix, ' Client reconnecting...'));
client.on('resume', () => console.log(dcPrefix, ' Client resumed connection...'));
client.on('warn', msg => console.warn(dcPrefix, ' ', msg));

module.exports = client;
