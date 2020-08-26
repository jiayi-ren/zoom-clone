const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3030;

app.get('/', (req, res) => {

})

server.listen(port)