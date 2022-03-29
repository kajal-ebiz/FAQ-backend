import { Dialect, Sequelize } from 'sequelize'

const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]

const dbName = config.database as string
const dbUser = config.username as string
const dbHost = config.host
const dbDriver = config.dialect as Dialect
const dbPassword = config.password

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  logging: env === 'production' ? false : true,
})

export default sequelizeConnection
