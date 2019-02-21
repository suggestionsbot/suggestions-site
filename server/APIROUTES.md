# HOME ROUTE - `/api/v1`

## GLOBAL ROUTES
```
✔ /guilds
/suggestions
/suggestions/:sID
/suggestions/approved
/suggestions/rejected
/commands
/blacklists
```
## GUILD SPECIFIC ROUTES
```
✔ /guilds/:guildID
✔ /guilds/:guildID/suggestions
✔ /guilds/:guildID/suggestions/:sID
✔ /guilds/:guildID/suggestions/approved
✔ /guilds/:guildID/suggestions/approved/count
✔ /guilds/:guildID/suggestions/rejected
✔ /guilds/:guildID/suggestions/rejected/count
✔ /guilds/:guildID/blacklists
✔ /guilds/:guildID/blacklists/:caseNumber
✔ /guilds/:guildID/blacklists/count
✔ /guilds/:guildID/blacklists/active
✔ /guilds/:guildID/blacklists/active/count
✔ /guilds/:guildID/blacklists/inactive
✔ /guilds/:guildID/blacklists/inactive/count
✔ /guilds/:guildID/users/:userID
✔ /guilds/:guildID/users/:userID/suggestions
✔ /guilds/:guildID/users/:userID/suggestions/:sID
✔ /guilds/:guildID/users/:userID/suggestions/approved
✔ /guilds/:guildID/users/:userID/suggestions/approved/count
✔ /guilds/:guildID/users/:userID/suggestions/rejected
✔ /guilds/:guildID/users/:userID/suggestions/rejected/count
/guilds/:guildID/users/:userID/blacklists
/guilds/:guildID/users/:userID/blacklists/:caseNumber
/guilds/:guildID/users/:userID/blacklists/count
/guilds/:guildID/users/:userID/blacklists/active
/guilds/:guildID/users/:userID/blacklists/active/count
/guilds/:guildID/users/:userID/blacklists/rejected
/guilds/:guildID/users/:userID/blacklists/rejected/count
✔ /guilds/:guildID/users/:userID/commands/count
✔ /guilds/:guildID/commands/count
```

## USER SPECIFIC ROUTES
```
/users/:userID
/users/:userID/suggestions
/users/:userID/suggestions/:sID
/users/:userID/suggestions/approved
/users/:userID/suggestions/rejected
/users/:userID/commands
```