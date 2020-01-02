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

    describe('result index', () => {
        it('should show all the result resource', async () => {
            await Result.create({ repositoryName: 'repo', status: 'pending' });

            const response = await request(app).get('/results');
            expect(response.status).toBe(200);
            expect(response.body.length).toEqual(1);
        });
    });

    describe('result store', () => {
        it('should return a result resource', async () => {
            const repoName = 'my repo to scan';

            const response = await request(app)
                .post('/results')
                .send({ repoName });

            expect(response.status).toBe(201);
            expect(response.body.repositoryName).toEqual(repoName);
        });

        it('should store a result resource in the DB', async () => {
            const repoName = 'my repo to scan';

            await request(app)
                .post('/results')
                .send({ repoName });

            const stored = await Result.findOne({ where: { repositoryName: repoName } });
            expect(stored).toBeTruthy();
        });
    });

    describe('result show', () => {
        it('should return the detail of a result resource', async () => {
            const resultData = { repositoryName: 'repo', status: 'pending' };
            const result = await Result.create(resultData);

            const response = await request(app).get('/results/' + result.id);

            expect(response.status).toEqual(200);
            expect(response.body.id).toBe(result.id);
            expect(response.body.repositoryName).toBe(result.repositoryName);
            expect(response.body.status).toBe(result.status);
        });

        it('should return a return a not found error if id does not exists', async () => {
            await Result.create({ repositoryName: 'repo', status: 'pending' });

            const response = await request(app).get('/results/' + 2);

            expect(response.status).toEqual(404);
        });
    });
});
