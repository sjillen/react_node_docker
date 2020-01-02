const { Result } = require('../models');
const { scan } = require('../services');
const { logger } = require('../tools');

module.exports = {
    async index(req, res) {
        let results = [];
        try {
            results = await Result.findAll();
        } catch (e) {
            logger.error(e);
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
            logger.error(e);
            return res.status(400).json({ error: e.message });
        }

        return res.status(201).json(result.dataValues);
    },

    async show(req, res) {
        const id = req.params.resultId;

        let result = null;
        try {
            result = await Result.findOne({ where: { id } }, { raw: true });
        } catch (e) {
            logger.error(e);
            return res.status(400).json({ error: e.message });
        }

        if (!result) {
            return res.status(404).json({ error: 'Not Result found for Id ' + id });
        }

        return res.status(200).json(result);
    },
};
