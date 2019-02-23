const { Settings, Suggestion, Blacklist, Command } = require('../../models');
const error = require('../errors');

module.exports = {
    /**
     * Get all guilds.
     * 
     * @param {Object} model - The guild model.
     */
    getGuilds: async function() {
        const guilds = await Settings.find({}).sort({ _id: -1 });
        if (!guilds.length) return error.noGuilds();
        return guilds;
    },
    /**
     * Get the settings of a guild.
     * 
     * @param {Object} model - The guild model.
     * @param {String} guildID - The guild ID.
     */
    getGuild: async function(guildID) {
        const guild = await Settings.findOne({ guildID });
        if (!guild) return error.noGuildSettings(guildID);
        return guild;
    },
    /**
     * Get the suggestions of a guild.
     * 
     * @param {String} guildID - The guild ID.
     */
    getGuildSuggestions: async function(guildID) {
        const guild = await Suggestion.find({ guildID }).sort({ _id: -1 });
        if (!guild.length) return error.noGuildSettings(guildID);
        return guild;
    },
    /**
     * Get a guild suggestion.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} sID - The suggestion ID.
     */
    getGuildSuggestion: async function(guildID, sID) {
        const suggestion = await Suggestion.findOne({ $and: [{ guildID, sID }] });
        if (!suggestion) return error.noGuildSuggestion(guildID, sID);
        return suggestion;
    },
    /**
     * Get the approved or rejected suggestions of a guild.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} status - The suggestion status.
     */
    getGuildSuggestionsStatus: async function(guildID, status) {
        const suggestions = await Suggestion.find({ $and: [{ guildID, status }] }).sort({ _id: -1 });
        if (!suggestions.length) return error.noGuildSuggestionsStatus(status);
        return suggestions;
    },
    /**
     * Get the blacklists of a guild.
     * 
     * @param {String} guildID - The guild ID.
     */
    getGuildBlacklists: async function(guildID) {
        const guilds = await Blacklist.find({ guildID }).sort({ _id: -1 });
        if (!guilds.length) return error.noGuildBlacklists(guildID);
        return guilds;
    },
    /**
     * Get the active blacklists of a guild.
     * 
     * @param {String} guildID - The guild ID.
     * @param {Boolean} status - The status of a blacklist.
     */
    getGuildBlacklistsStatus: async function(guildID, status) {
        const blacklists = await Blacklist.find({ $and: [{ guildID, status }] }).sort({ _id: -1 });
        if (!blacklists.length) return error.noGuildBlacklistsStatus(status);
        return blacklists;
    },
    /**
     * Get a guild blacklist.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} caseNumber - The blackist case number.
     */
    getGuildBlacklist: async function(guildID, caseNumber) {
        const blacklist = await Blacklist.findOne({ $and: [{ guildID, case: caseNumber }] });
        if (!blacklist) return error.noGuildBlacklist(guildID, caseNumber);
        return blacklist;
    },
    /**
     * Get a guild member's suggestions.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The user ID.
     */
    getGuildMemberSuggestions: async function(guildID, userID) {
        const member = await Suggestion.find({ $and: [{ guildID, userID }] }).sort({ _id: -1 });
        if (!member) return error.noGuildMemberSuggestions(guildID, userID);
        return member;
    },
    /**
     * Get a suggestion of a guild member.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The user ID.
     * @param {String} sID - The suggestion ID.
     */
    getGuildMemberSuggestion: async function(guildID, userID, sID) {
        const suggestion = await Suggestion.findOne({ $and: [{ guildID, userID, sID }] });
        if (!suggestion) return error.noGuildMemberSuggestion(guildID, userID, sID);
        return suggestion;
    },
    /**
     * Get the approved or rejected suggestions of a guild member.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The user ID.
     * @param {String} status - The suggestion status.
     */
    getGuildMemberSuggestionsStatus: async function(guildID, userID, status) {
        const suggestions = await Suggestion.find({ $and: [{ guildID, userID, status }] }).sort({ _id: -1 });
        if (!suggestions.length) return error.noGuildMemberSuggestionsStatus(guildID, userID, status);
        return suggestions;
    },
    /**
     * Get the blacklists of a guild member.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The user ID.
     */
    getGuildMemberBlacklists: async function(guildID, userID) {
        
    },
    /**
     * Get the command count for a guild.
     * 
     * @param {String} guildID - The guild ID.
     */
    getGuildCommandCount: async function(guildID) {
        const guild = await Command.find({ guildID }).sort({ _id: -1 });
        if (!guild.length) return error.noGuildCommandCount(guildID);
        return guild;
    },
    /**
     * Get the command count for a guild member.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The user ID.
     */
    getGuildMemberCommandCount: async function(guildID, userID) {
        const member = await Command.find({ $and: [{ guildID, userID }] }).sort({ _id: -1 });
        if (!member.length) return error.noGuildMemberCommandCount(guildID, userID);
        return member;
    }
};