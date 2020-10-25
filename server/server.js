const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = 5000;

app.use(express.json());

const server = app.listen(PORT);

// WebSocket logic
const io = socket(server);

const socketSend = (req, res) => {
  console.log(`in here: ${Object.keys(req.body.data)}`);
  io.sockets.emit('data', req.body.data);
  res.sendStatus(200);
};

app.post('/data', socketSend);

// io.on('connection', (currSocket) => {
//   currSocket.on('message', (data) => {
//     console.log('received msg');
//     io.sockets.emit('message', data);
//   });
// });
