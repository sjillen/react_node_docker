const checkValidName = (req, res, next) => {
    const { repoName } = req.body;
    if (!repoName || typeof repoName !== 'string') {
        return res.status(400).json({ message: 'No scan name entered' });
    }

    cleanName = repoName.replace(/(<([^>]+)>)/gi, '').trim();
    if (!cleanName.length) {
        return res.status(400).json({ message: 'You must enter a valid scan name' });
    }

    req.body.repoName = cleanName;

    next();
};

module.exports = checkValidName;
