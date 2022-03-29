"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const dbName = config.database;
const dbUser = config.username;
const dbHost = config.host;
const dbDriver = config.dialect;
const dbPassword = config.password;
const sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    logging: env === 'production' ? false : true,
});
exports.default = sequelizeConnection;
