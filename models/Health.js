// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Instialize Health model (table) by extending off Sequelize's Model class
class Health extends Model {}

// set up fields and rules for Health model
Health.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'health',
      }
);