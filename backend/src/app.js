const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
    // htttp://meuapp.com
}));

app.use(express.json());

app.use(routes);

// query builder:  table('users').select('*').where();

module.exports = app;