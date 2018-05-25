import { sequelize, Sequelize } from './scumPool'

export default sequelize.define('task',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        taskTag: Sequelize.STRING,
        taskName: Sequelize.STRING,
        taskDescription: Sequelize.STRING,
        status: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        lastModifiedAt: Sequelize.DATE,
        lastModifiedBy: Sequelize.STRING,
        createdBy: Sequelize.STRING,
        timeSpend: Sequelize.DOUBLE,
        owner: Sequelize.INTEGER,
        reporter: Sequelize.INTEGER,
    },
    {
        updatedAt: 'lastModifiedAt',
        freezeTableName: true,
        tableName: 'task',
    }
)

export {
    sequelize,
    Sequelize
}
