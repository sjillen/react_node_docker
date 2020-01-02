const { ResultController } = require('../controllers');
const { checkValidName } = require('../middlewares');

module.exports = app => {
    app.get('/results', ResultController.index);
    app.post('/results', checkValidName, ResultController.store);
    app.get('/results/:resultId', ResultController.show);
};
