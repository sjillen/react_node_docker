const { createLogger, transports, format } = require('winston');
const { printf, combine, errors } = format;

const print = printf(info => {
    const log = `${info.level}: ${info.message}`;
    const errorLog = `${info.level}: ${info.stack}`;
    return info.stack ? errorLog : log;
});

const logger = createLogger({
    format: combine(errors({ stack: true }), print),
    transports: [
        new transports.File({
            filename: 'storage/app.log',
            handleExceptions: true,
            level: 'debug',
        }),
    ],
});

logger.stream = {
    write: function(message) {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    },
};

module.exports = logger;
