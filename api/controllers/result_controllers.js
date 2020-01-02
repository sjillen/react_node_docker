module.exports = {
    async index(req, res, next) {
        let results = [];
        try {
            results = await Result.findAll();
        } catch (e) {
            console.error(e);
            return res.status(400).json({ error: e.message });
        }

        return res.status(200).json(results.map(r => r.dataValues));
    },
};
