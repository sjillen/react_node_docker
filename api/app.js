const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const { logger } = require('./tools');

// This is used until migrations are up and running for dev and prod
if (process.env.NODE_ENV !== 'test') sequelize.sync({ force: true });

const app = express();
app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

require('./routes')(app);

module.exports = app;
