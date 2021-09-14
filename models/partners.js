const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  guildDescription: String,
  guildIcon: String,
  guildLinks: [{
    name: String,
    link: String
  }],
  guildInvite: String
});

module.exports = mongoose.model('Partners', partnerSchema);
