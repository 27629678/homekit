const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.end('hello, world.');
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
