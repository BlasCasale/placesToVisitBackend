const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const router = require('./routes/index');

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use(router);
server.use('*', (req, res) => {
    res.status(404).json({ error: "Please enter a valid endpoint." });
});

module.exports = server;