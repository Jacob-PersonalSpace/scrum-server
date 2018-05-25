import Task, { sequelize, Sequelize } from '../../model/task'

const Op = Sequelize.Op

export const getTaskList = async () => {
    const rows = await Task.findAll({ attributes: ["id", "taskTag", "taskName", "createdAt", "owner", "reporter", "status", "timeSpend"], where: { status: { [Op.gt]: 0 } } })

    return Promise.resolve(rows)
}
