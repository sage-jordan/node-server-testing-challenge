const request = require('supertest');
const server = require('./server.js');

describe('index.js', () => {
    describe('get /', () => {
        it('should return an OK status code from the index route', async () => {
            const expectedStatusCode = 200;
      
            const res = await request(server).get('/');
      
            expect(res.status).toEqual(expectedStatusCode);
      
          });
    });
});