import Sequelize from 'sequelize'

import { MYSQL_CONFIG } from '../config/db'

const sequelize = new Sequelize(
    MYSQL_CONFIG.database,
    MYSQL_CONFIG.user,
    MYSQL_CONFIG.password,
    {
        host: MYSQL_CONFIG.host,
        port: MYSQL_CONFIG.port,
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

export {
    sequelize,
    Sequelize
}
