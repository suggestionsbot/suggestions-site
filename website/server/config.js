require('dotenv').config();

module.exports = {
  db: process.env.NODE_ENV === 'production' ? process.env.NUXT_MONGO_URI : 'mongodb://localhost:27017/suggestions-site',
  dbOptions: {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    connectTimeoutMS: 30000,
    family: 4
  },
  scopes: ['identify', 'guilds']
};
