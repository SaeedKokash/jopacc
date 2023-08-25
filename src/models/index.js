'use strict';

const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

// for deployment
const sequelizeOptions = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);


// for development

// const sequelizeOptions = {};
// const sequelize = new Sequelize(DATABASE_URL, {});



module.exports = { sequelize };
