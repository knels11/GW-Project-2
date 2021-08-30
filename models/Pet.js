// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Instialize Health model (table) by extending off Sequelize's Model class
class Pet extends Model {}

// set up fields and rules for Health model
Pet.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      }
    },
    {
      pet_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 16]
        }
      },
    },
    {
      pet_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      pet_compatability: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      pet_type: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      pet_health: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
        sequelize,
    }
);


module.exports = Pet;