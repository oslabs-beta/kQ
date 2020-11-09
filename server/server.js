const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = 5000;

app.use(express.json());

const server = app.listen(PORT);

// WebSocket logic
const io = socket(server);

// middelware to send data from kafka producer in req.body to frontend kafkaq monitor 
const producerSocketSend = (req, res) => {
  /*
  req.body.data looks like:
  {
    size: 129, 
    duration: 3, 
    sentAt: 1603588918552
  }
  */

  // producer data stored in req.body.data
  const { data } = req.body; // data = {size: size, pendingDuration: pendingDuration, sentAt: sentAt}

  const processedData = {
    size: data.size,
    pendingDuration: data.pendingDuration,
    processingTimeInMilliseconds: Date.now() - data.sentAt,
  };

  // sending processedData object to frontend monitor, Dashboard file where its listening to 'producer' on PORT 5000
  io.sockets.emit('producer', processedData);
  res.sendStatus(200);
};

app.post('/producer', producerSocketSend);

// io.on('connection', (currSocket) => {
//   currSocket.on('message', (data) => {
//     console.log('received msg');
//     io.sockets.emit('message', data);
//   });
// });

// middelware to send data from kafka consumer in req.body to frontend kafkaq monitor 
const consumerSocketSend = (req, res) => {
  /*
  req.body.data looks like:
  {
    size: 129, 
    duration: 3, 
    sentAt: 1603588918552
  }
  */

  // consumer data stored in req.body.data
  const { data } = req.body; // data = {size: size, pendingDuration: pendingDuration, sentAt: sentAt}
  const processedData = {
    size: data.size,
    processingTimeInMilliseconds: Date.now() - data.sentAt,
    pendingDuration: data.pendingDuration,
  };

  // sending processedData object to frontend monitor, Dashboard file where its listening to 'consumer' on PORT 5000
  io.sockets.emit('consumer', processedData);
  res.sendStatus(200);
};

app.post('/consumer', consumerSocketSend);
