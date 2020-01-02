const request = require('supertest');
const app = require('../../app');

describe('result api', () => {
    it('should return a 200', async () => {
        const response = await request(app).get('/');

        expect(response.status).toEqual(200);
    });
});
