import Task, { sequelize, Sequelize } from '../../model/task'
import User from '../../model/user'

User.hasMany(Task, { foreignKey: 'id' })
Task.belongsTo(User, { foreignKey: 'owner' })

const Op = Sequelize.Op

export const getTaskList = async () => {
    const rows = await Task.findAll({
        attributes: ["id", "taskTag", "taskName", "taskDescription", "createdAt", "owner", "reporter", "status", "timeSpend"],
        where: { status: { [Op.gt]: 0 } },
        order: [[
            'taskTag', 'ASC'
        ]],
        include: [
            {
                model: User,
                required: false,
                attributes: ["userName", "color"]
            }
        ]
    })

    return rows
}
