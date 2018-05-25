import moment from 'moment'

import Task from '../../model/task'

export const createTask = async ({ taskTag, taskName, taskDescription, userId }) => {
    const row = await Task.create({
        taskTag,
        taskName,
        taskDescription,
        status: 1,
        createdAt: moment(),
        createdBy: userId,
        reporter: userId,
    })

    return Promise.resolve(row)
}
