const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const { URL } = require('./_config/db');
const port = 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(URL, (err, database) => {
    if (err) return console.log(err);
    require('./routes')(app, database);

    app.listen(port, () => {
        console.log('Server is live at ', port);
    });
});
