import { sequelize, Sequelize } from './scumPool'

export default sequelize.define('comment',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        taskId: Sequelize.INTEGER,
        comment: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        createdBy: Sequelize.INTEGER,
        lastModifiedAt: Sequelize.DATE,
        lastModifiedBy: Sequelize.INTEGER,
        status: Sequelize.INTEGER,
    },
    {
        freezeTableName: true,
        tableName: 'comment',
        timestamps: false,
    }
)

export {
    sequelize,
    Sequelize
}
