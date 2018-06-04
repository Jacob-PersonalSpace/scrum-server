import Task, { sequelize, Sequelize } from '../../model/task'

const Op = Sequelize.Op

export const getTaskList = async () => {
    const rows = await Task.findAll({
        attributes: ["id", "taskTag", "taskName", "taskDescription", "createdAt", "owner", "reporter", "status", "timeSpend"],
        where: { status: { [Op.gt]: 0 } },
        order: [[
            'taskTag', 'ASC'
        ]]
    })

    return Promise.resolve(rows)
}
