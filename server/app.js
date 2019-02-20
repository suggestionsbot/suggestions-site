require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/api', (req, res, next) => {
    res.status(404).json({ 
        status: res.statusCode,
        message: res.statusMessage
     });
});

app.get('/api/v1', (req, res, next) => {
    res.json({ 
        status: res.statusCode,
        message: 'Welcome to the Suggestions bot API!'
     });
});

let port;
if (process.env.NODE_ENV === 'production') port = process.env.PORT;
else port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));