'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Results', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.STRING,
            },
            repositoryName: {
                type: Sequelize.STRING,
            },
            queuedAt: {
                type: Sequelize.DATE,
            },
            scanningAt: {
                type: Sequelize.DATE,
            },
            finishedAt: {
                type: Sequelize.DATE,
            },
            findings: {
                type: Sequelize.JSONB,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Results');
    },
};
