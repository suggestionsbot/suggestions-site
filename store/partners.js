export const state = () => ({
  partners: []
});

export const mutations = {
  add (state, partner) {
    state.partners.push({
      guildID: partner.guildID,
      guildName: partner.guildName,
      guildDescription: partner.guildDescription,
      guildIcon: partner.guildIcon,
      guildLink: { name: partner.guildLinkName, link: partner.guildLinkURL },
      guildInvite: partner.guildInvite
    });
  },
  remove (state, { partner }) {
    state.partners.splice(state.partners.indexOf(partner), 1);
  },
  toggle (state, partner) {
    partner.done = !partner.done;
  }
};
