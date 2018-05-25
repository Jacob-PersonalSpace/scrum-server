import moment from 'moment'

import Task, { sequelize } from '../../model/task'

export const updateTask = async ({ status, id, userId, owner, timeSpend }) => {
    try {
        const [result] = await Task.update(
            {
                status,
                lastModifiedBy: userId,
                lastModifiedAt: moment(),
                owner,
                timeSpend,
            },
            {
                where: { id }
            }
        )

        return Promise.resolve(result)
    } catch (error) {
        return Promise.reject(error)
    }
}
