'use strict';
module.exports = (sequelize, DataTypes) => {
    const Result = sequelize.define(
        'Result',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            status: DataTypes.STRING,
            repositoryName: DataTypes.STRING,
            queuedAt: DataTypes.DATE,
            scanningAt: DataTypes.DATE,
            finishedAt: DataTypes.DATE,
            findings: DataTypes.JSONB,
        },
        {}
    );
    Result.associate = function() {
        // associations can be defined here
    };
    return Result;
};
