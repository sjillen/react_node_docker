const app = require('./app');
const server = require('http').createServer(app);
const { logger } = require('./tools');

const PORT = process.env.PORT || 3090;

server.listen(PORT, err => {
    if (err) {
        logger.err(err);
        process.exit(1);
    }
    logger.info('server now listening on port ' + PORT);
});
