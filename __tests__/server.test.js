let request = require('supertest');

const server = 'http://localhost:5000';
request = request(server);

describe('Route integration', () => {
  /*
  request body should look like:
  {
    size: 129, 
    duration: 3, 
    sentAt: 1603588918552
  }
  */
  const requestBody = {
    data: {
      size: 129,
      duration: 3,
      sentAt: 1603588918552,
    },
  };

  describe('Producer', () => {
    it('sends success status code after sending message through the web socket', () =>
      request.post('/producer').send(requestBody).expect(200));
  });

  describe('Consumer', () => {
    it('sends success status code after sending message through the web socket', () =>
      request.post('/consumer').send(requestBody).expect(200));
  });
});
