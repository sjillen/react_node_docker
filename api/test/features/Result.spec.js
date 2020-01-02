const request = require('supertest');
const app = require('../../app');
const db = require('../../models');
const { Result, sequelize } = db;

describe('result api', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    afterEach(async () => {
        await Result.destroy({ where: {} });
    });

    it('should show all the result resource', async () => {
        const r = await Result.create({ RepositoryName: 'repo', Status: 'pending' });

        const response = await request(app).get('/results');
        expect(response.status).toBe(200);
        expect(response.body.length).toEqual(1);
    });
});
