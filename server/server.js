const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = 5000;

app.use(express.json());

const server = app.listen(PORT);

// WebSocket logic
const io = socket(server);

const socketSend = (req, res) => {
  /*
  req.body.data looks like:
  {
    size: 129, 
    duration: 3, 
    sentAt: 1603588918552
  }
  */

  const { data } = req.body;
  const processedData = {
    size: data.size,
    pendingDuration: data.pendingDuration,
    processingTimeInMilliseconds: Date.now() - data.sentAt,
  };

  io.sockets.emit('data', processedData);
  res.sendStatus(200);
};

app.post('/data', socketSend);

// io.on('connection', (currSocket) => {
//   currSocket.on('message', (data) => {
//     console.log('received msg');
//     io.sockets.emit('message', data);
//   });
// });
