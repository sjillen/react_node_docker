const { Result } = require('../models');
const { scan } = require('../services');

module.exports = {
    async index(req, res) {
        let results = [];
        try {
            results = await Result.findAll();
        } catch (e) {
            console.error(e);
            return res.status(400).json({ error: e.message });
        }

        return res.status(200).json(results.map(r => r.dataValues));
    },

    async store(req, res) {
        const repo = { repositoryName: req.body.repoName };

        const scannedRepo = scan(repo);
        let result = {};
        try {
            result = await Result.create(scannedRepo);
        } catch (e) {
            console.error(e);
            return res.status(400).json({ error: e.message });
        }

        return res.status(201).json(result.dataValues);
    },
};
