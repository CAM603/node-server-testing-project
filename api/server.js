const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const dealersRouter = require('../dealerships/router');
const brandsRouter = require('../brands/router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/dealerships', dealersRouter);
server.use('/api/brands', brandsRouter);

server.get('/', (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;
