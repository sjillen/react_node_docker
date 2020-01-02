const checkValidName = (req, res, next) => {
    const { repoName } = req.body;
    if (!repoName || typeof repoName !== 'string') {
        return res.status(400).json({ error: 'No scan name entered' });
    }
    next();
};

module.exports = checkValidName;
