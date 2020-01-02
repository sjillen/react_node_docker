module.exports = {
    index(req, res, next) {
        return res.status(200).json({ hi: 'there' });
    },
};
