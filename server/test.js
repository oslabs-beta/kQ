const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

/*
req.body :
{
  "data": [1, 2, 3, 4, ...]
}
*/

// app.get('/', (req, res) => res.json({ testing: 'hey there' }));

// receive a post request from go server
app.post('/', (req, res) => {
  const { data } = req.body;
  // ourData.forEach((el) => {
  //   console.log(el);
  // });
  console.log(data);

  // res.status(200).json({
  //   testing: 'hey there',
  // });
  res.sendStatus(200);
});

app.listen(PORT, () => console.log('express running'));
