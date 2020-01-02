const { ResultController } = require('../controllers');

module.exports = app => {
    app.get('/results', ResultController.index);
};
