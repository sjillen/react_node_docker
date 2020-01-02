'use strict';
module.exports = (sequelize, DataTypes) => {
    const Result = sequelize.define(
        'Result',
        {
            Id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            Status: DataTypes.STRING,
            RepositoryName: DataTypes.STRING,
            QueuedAt: DataTypes.DATE,
            ScanningAt: DataTypes.DATE,
            FinishedAt: DataTypes.DATE,
            Findings: DataTypes.JSONB,
        },
        {}
    );
    Result.associate = function() {
        // associations can be defined here
    };
    return Result;
};
