const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});


server.listen('4000', () => {
    console.log('===server listening on port 4000===');
});