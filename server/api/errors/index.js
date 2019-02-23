module.exports = {
    /**
     * Error message if no guild settings are found.
     * 
     * @param {String} guildID - The guild object.
     */
    noGuildSettings: function(guildID) {
        return {
            code: 12,
            message: `Guild ID '${guildID}' does not exist in the database.`
        };
    },
    /**
     * Error message if a guild suggestion is not found.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} sID - The suggestion ID.
     */
    noGuildSuggestion: function(guildID, sID) {
        return {
            code: 11,
            message: `The sID '${sID}' does not exist in the guild '${guildID}'.`
        };
    },
    /**
     * Error message if no approved or rejected guild suggestions are found.
     * 
     * @param {String} status - The status of the guild suggestions.
     */
    noGuildSuggestionsStatus: function(status) {
        return {
            code: 9,
            message: `No ${status === 'approved' ? 'approved' : 'rejected'} suggestions found.`
        };
    },
    /**
     * Error message if no guilds are found.
     */
    noGuilds: function() {
        return {
            code: 13,
            message: 'No guilds found.'
        };
    },
    /**
     * Error message if no guild blacklists are found.
     */
    noGuildBlacklists: function(guildID) {
        return {
            code: 14,
            message: `No blacklists found for the guild '${guildID}'.`
        };
    },
    /**
     * Error message if no active or inactive guild blacklists are found.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} status - The status of the guild blacklists.
     */
    noGuildBlacklistsStatus: function(guildID, status) {
        return {
            code: 15,
            message: `No ${status === true ? 'active' : 'inactive'} blacklists found in the guild '${guildID}'.`
        };
    },
    /**
     * Error message if no guild blacklist is found.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} caseNumber - The case number of the guild blacklist.
     */
    noGuildBlacklist: function(guildID, caseNumber) {
        return {
            code: 16,
            message: `No guild blacklist with the case number '${caseNumber}' was found in the guild '${guildID}'.`
        };
    },
    /**
     * Error message if no guild suggestions are found for the guild member.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The user ID.
     */
    noGuildMemberSuggestions: function(guildID, userID) {
        return {
            code: 17,
            message: `No suggestions found for '${userID}' in the guild '${guildID}'.`
        };
    },
    /**
     * Error message if a suggestion is not found for a guild member.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The user ID.
     * @param {String} sID - The suggestion ID.
     */
    noGuildMemberSuggestion: function(guildID, userID, sID) {
        return {
            code: 18,
            message: `The sID '${sID}' was not found for '${userID}' in the guild '${guildID}'`
        };
    },
    /**
     * Error message if no approved or rejected suggestions are found for the guild member.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The user ID.
     * @param {String} status - The suggestion status.
     */
    noGuildMemberSuggestionsStatus: function(guildID, userID, status) {
        return {
            code: 19,
            message: `No ${status === 'approved' ? 'approved' : 'rejected'} suggestions found for the user '${userID}' in the guild '${guildID}'.`
        };
    },
    /**
     * Error message if no command count is found for a guild.
     * 
     * @param {String} guildID - The guild ID.
     */
    noGuildCommandCount: function(guildID) {
        return {
            code: 20,
            message: `No command usage count for the guild '${guildID}'.`
        };
    },
    /**
     * Error message if no command count is found a for guild member.
     * 
     * @param {String} guildID - The guild ID.
     * @param {String} userID - The guild ID.
     */
    noGuildMemberCommandCount: function(guildID, userID) {
        return {
            code: 21,
            message: `No command usage count for the user '${userID}' in the guild '${guildID}'.`
        };
    }
};