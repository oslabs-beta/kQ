const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = 5000;

app.use(express.json());

const server = app.listen(PORT);

// WebSocket logic
const io = socket(server);
app.get('/hello', (req, res) => {
  io.sockets.emit('message', { msg: 'can you see this?' });
  res.sendStatus(200);
});
io.on('connection', (currSocket) => {
  currSocket.on('message', (data) => {
    console.log('received msg');
    io.sockets.emit('message', data);
  });
});
