const express = require('express');
const { Guild: guild } = require('./helpers');
require('dotenv');

const router = express.Router();

const defaultError = (res, error) => {
    return { status: res.statusCode, message: error.message };
}

router.get('/', async (req, res, next) => {
    let g;

    try {
        const guilds = await guild.getGuilds();
        if (guilds.code === 13) throw Error('NoGuilds');
        res.json(guilds);
    } catch (error) {
        if (error.message === 'NoGuilds') res.json(g);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/count', async (req, res, next) => {
    try {
        const guilds = await guild.getGuilds();
        if (guilds.code === 13) throw Error('NoGuilds');
        res.json({ count: guilds.length });
    } catch (error) {
        if (error.message === 'NoGuilds') res.json(g);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID', async (req, res, next) => {
    const { guildID } = req.params;
    let g;

    try {
        g = await guild.getGuild(guildID);
        if (g.code === 12) throw Error('NoGuildSettings');
        res.json(g);
    } catch (error) {
        if (error.message === 'NoGuildSettings') return res.json(g);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/suggestions', async (req, res, next) => {
    const { guildID } = req.params;
    let s;

    try {
        s = await guild.getGuildSuggestions(guildID);
        if (s.code === 12) throw Error('NoGuildSettings');
        res.json(s);
    } catch (error) {
        if (error.message === 'NoGuildSettings') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/suggestions/approved', async (req, res, next) => {
    const { guildID } = req.params;
    let s;

    try {
        s = await guild.getGuildSuggestionsStatus(guildID, 'approved');
        if (s.code === 9) throw Error('NoGuildApprovedSuggestions');
        res.json(s);
    } catch (error) {
        if (error.message === 'NoGuildApprovedSuggestions') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/suggestions/approved/count', async (req, res, next) => {
    const { guildID } = req.params;
    let s;

    try {
        s = await guild.getGuildSuggestionsStatus(guildID, 'approved');
        if (s.code === 9) throw Error('NoGuildApprovedSuggestions');
        res.json({ count: s.length });
    } catch (error) {
        if (error.message === 'NoGuildApprovedSuggestions') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});


router.get('/:guildID/suggestions/rejected', async (req, res, next) => {
    const { guildID } = req.params;
    let s;

    try {
        s = await guild.getGuildSuggestionsStatus(guildID, 'rejected');
        if (s.code === 9) throw Error('NoGuildRejectedSuggestions');
        res.json(s);
    } catch (error) {
        if (error.message === 'NoGuildRejectedSuggestions') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/suggestions/rejected/count', async (req, res, next) => {
    const { guildID } = req.params;
    let s;

    try {
        s = await guild.getGuildSuggestionsStatus(guildID, 'rejected');
        if (s.code === 9) throw Error('NoGuildRejectedSuggestions');
        res.json({ count: s.length });
    } catch (error) {
        if (error.message === 'NoGuildRejectedSuggestions') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/suggestions/:sID', async (req, res, next) => {
    const { guildID, sID } = req.params;
    let s;

    try {
        s = await guild.getGuildSuggestion(guildID, sID);
        if (s.code === 11) throw Error('NoGuildSuggestion');
        res.json(s);
    } catch (error) {
        if (error.message === 'NoGuildSuggestion') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/blacklists', async (req, res, next) => {
    const { guildID } = req.params;
    let b;

    try {
        b = await guild.getGuildBlacklists(guildID);
        if (b.code === 14) throw Error('NoGuildBlacklists');
        res.json(b);
    } catch (error) {
        if (error.message === 'NoGuildBlacklists') return res.json(b);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/blacklists/count', async (req, res, next) => {
    const { guildID } = req.params;
    let b;

    try {
        b = await guild.getGuildBlacklists(guildID);
        if (b.code === 14) throw Error('NoGuildBlacklists');
        res.json({ count: b.length });
    } catch (error) {
        if (error.message === 'NoGuildBlacklists') return res.json(b);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/blacklists/active', async (req, res, next) => {
    const { guildID } = req.params;
    let b;

    try {
        b = await guild.getGuildBlacklistsStatus(guildID, true);
        if (b.code === 15) throw Error('NoGuildActiveBlackists');
        res.json(b);
    } catch (error) {
        if (error.message === 'NoGuildActiveBlackists') return res.json(b);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/blacklists/active/count', async (req, res, next) => {
    const { guildID } = req.params;
    let b;

    try {
        b = await guild.getGuildBlacklistsStatus(guildID, true);
        if (b.code === 15) throw Error('NoGuildActiveBlackists');
        res.json({ count: b.length });
    } catch (error) {
        if (error.message === 'NoGuildActiveBlackists') return res.json(b);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/blacklists/inactive', async (req, res, next) => {
    const { guildID } = req.params;
    let b;

    try {
        b = await guild.getGuildBlacklistsStatus(guildID, false);
        if (b.code === 15) throw Error('NoGuildInactiveBlackists');
        res.json(b);
    } catch (error) {
        if (error.message === 'NoGuildInactiveBlackists') return res.json(b);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/blacklists/inactive/count', async (req, res, next) => {
    const { guildID } = req.params;
    let b;

    try {
        b = await guild.getGuildBlacklistsStatus(guildID, false);
        if (b.code === 15) throw Error('NoGuildInactiveBlackists');
        res.json({ count: b.length });
    } catch (error) {
        if (error.message === 'NoGuildInactiveBlackists') return res.json(b);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/blacklists/:caseNumber', async (req, res, next) => {
    const { guildID, caseNumber } = req.params;
    let b;

    try {
        b = await guild.getGuildBlacklist(guildID, caseNumber);
        if (b.code === 16) throw Error('NoGuildBlacklist');
        res.json(b);
    } catch (error) {
        if (error.message === 'NoGuildBlacklist') return res.json(b);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/users/:userID', async (req, res, next) => {
    const { guildID, userID } = req.params;
    let s;

    try {
        s = await guild.getGuildMemberSuggestions(guildID, userID);
        if (s.code === 17) throw Error('NoGuildMemberSuggestions');
        res.json(s);
    } catch (error) {
        if (error.message === 'NoGuildMemberSuggestions') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/users/:userID/count', async (req, res, next) => {
    const { guildID, userID } = req.params;
    let s;

    try {
        s = await guild.getGuildMemberSuggestions(guildID, userID);
        if (s.code === 17) throw Error('NoGuildMemberSuggestions');
        res.json({ count: s.length });
    } catch (error) {
        if (error.message === 'NoGuildMemberSuggestions') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/users/:userID/approved', async (req, res, next) => {
    const { guildID, userID } = req.params;
    let s;

    try {
        s = await guild.getGuildMemberSuggestionsStatus(guildID, userID, 'approved');
        if (s.code === 19) throw Error('NoGuildMemberApprovedSuggestions');
        res.json(s);
    } catch (error) {
        if (error.message === 'NoGuildMemberApprovedSuggestions') return res.json(s);

        console.error(error);
        res.json(s);
    }
});

router.get('/:guildID/users/:userID/approved/count', async (req, res, next) => {
    const { guildID, userID } = req.params;
    let s;

    try {
        s = await guild.getGuildMemberSuggestionsStatus(guildID, userID, 'approved');
        if (s.code === 19) throw Error('NoGuildMemberApprovedSuggestions');
        res.json({ count: s.length });
    } catch (error) {
        if (error.message === 'NoGuildMemberApprovedSuggestions') return res.json(s);

        console.error(error);
        res.json(s);
    }
});

router.get('/:guildID/users/:userID/rejected', async (req, res, next) => {
    const { guildID, userID } = req.params;
    let s;

    try {
        s = await guild.getGuildMemberSuggestionsStatus(guildID, userID, 'rejected');
        if (s.code === 19) throw Error('NoGuildMemberRejectedSuggestions');
        res.json(s);
    } catch (error) {
        if (error.message === 'NoGuildMemberRejectedSuggestions') return res.json(s);

        console.error(error);
        res.json(s);
    }
});

router.get('/:guildID/users/:userID/rejected/count', async (req, res, next) => {
    const { guildID, userID } = req.params;
    let s;

    try {
        s = await guild.getGuildMemberSuggestionsStatus(guildID, userID, 'rejected');
        if (s.code === 19) throw Error('NoGuildMemberRejectedSuggestions');
        res.json({ count: s.length });
    } catch (error) {
        if (error.message === 'NoGuildMemberRejectedSuggestions') return res.json(s);

        console.error(error);
        res.json(s);
    }
});

router.get(`/:guildID/users/:userID/commands/count`, async (req, res, next) => {
    const { guildID, userID } = req.params;
    let c;

    try {
        c = await guild.getGuildMemberCommandCount(guildID, userID);
        if (c.code === 21) throw Error('NoGuildMemberCommandCount');
        res.json({ count: c.length });
    } catch (error) {
        if (error.message === 'NoGuildMemberCommandCount') return res.json(c);

        console.error(error);
        res.json(c);
    }
});

router.get('/:guildID/users/:userID/:sID', async (req, res, next) => {
    const { guildID, userID, sID } = req.params;
    let s;

    try {
        s = await guild.getGuildMemberSuggestion(guildID, userID, sID);
        if (s.code === 18) throw Error('NoGuildMemberSuggestion');
        res.json(s);
    } catch (error) {
        if (error.message === 'NoGuildMemberSuggestion') return res.json(s);

        console.error(error);
        res.json(defaultError);
    }
});

router.get('/:guildID/commands/count', async (req, res, next) => {
    const { guildID } = req.params;
    let c;

    try {
        c = await guild.getGuildCommandCount(guildID);
        if (c.code === 20) throw Error('NoGuildCommandCount');
        res.json({ count: c.length });
    } catch (error) {
        if (error.message === 'NoGuildCommandCount') return res.json(c);

        console.error(error);
        res.json(c);
    }
});

module.exports = router;