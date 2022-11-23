const express = require('express');

const Router = require('./routes')

const connect = require("./schemas");
connect();

const app = express();
const port = 3001;

app.use(express.json())

app.use('/api', Router)

app.listen(process.env.PORT || 5000, () => {
    console.log(port, 'Server is open with port!');
})