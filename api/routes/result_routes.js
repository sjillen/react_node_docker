const { ResultController } = require('../controllers');

module.exports = app => {
    app.get('/', ResultController.index);
};
