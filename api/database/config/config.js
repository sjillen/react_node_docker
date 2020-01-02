module.exports = {
    development: {
        username: 'guardrails',
        password: 'password',
        host: 'postgres',
        database: 'dev_db',
        dialect: 'postgres',
        logging: false,
    },
    test: {
        username: 'guardrails',
        password: 'password',
        host: 'localhost',
        database: 'test_db',
        dialect: 'postgres',
        logging: false,
    },
};
