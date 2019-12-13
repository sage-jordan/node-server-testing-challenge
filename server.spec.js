const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('get /', () => {
        it('should return 200 status', async () => {
            return request(server).get('/').expect(200);
        });
    });
});