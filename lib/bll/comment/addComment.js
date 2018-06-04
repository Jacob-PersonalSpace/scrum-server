import moment from 'moment'

import Comment from '../../model/comment'

export const addComment = async ({ taskId, comment, userId }) => {
    const row = await Comment.create({
        taskId,
        comment,
        status: 1,
        createdAt: moment(),
        createdBy: userId,
    })

    return Promise.resolve(row)
}
