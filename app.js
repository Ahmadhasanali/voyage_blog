const express = require('express');

const Router = require('./routes')

const connect = require("./schemas");
connect();

const app = express();
const port = 3000;

app.use(express.json())

app.use('/api', Router)

app.listen(port, () => {
    console.log(port, 'Server is open with port!');
})