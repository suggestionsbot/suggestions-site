require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

const routes = require('./api');

const dbOptions = {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    connectTimeoutMS: 10000,
    family: 4
};

const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/suggestions-dev'
const globalRoute = '/api/v1';

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(dbURI, dbOptions);
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, '/public/')));
// app.use(globalRoute, routes.Blacklists);
// app.use(globalRoute, routes.Commands);
app.use(`${globalRoute}/guilds`, routes.Guilds);
// app.use(globalRoute, routes.Suggestions);

app.get('/api', (req, res, next) => {
    res.json({
        status: res.statusCode,
        message: "Please use the '/api/v1' route for API access."
    });
});

app.get(globalRoute, (req, res, next) => {
    res.json({ 
        status: res.statusCode,
        message: 'Welcome to the Suggestions bot API!'
     });
});

let port;
if (process.env.NODE_ENV === 'production') port = process.env.PORT;
else port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));