import { sequelize, Sequelize } from './scumPool'

export default sequelize.define('user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: Sequelize.STRING,
        password: Sequelize.STRING,
        color: Sequelize.STRING,
        status: Sequelize.INTEGER,
    },
    {
        freezeTableName: true,
        tableName: 'user',
        timestamps: false,
    }
)
