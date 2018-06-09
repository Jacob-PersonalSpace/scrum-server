import moment from 'moment'

import Comment, { sequelize } from '../../model/comment'

export const deleteComment = async ({ id, userId }) => {
    const [result] = await Comment.update(
        {
            status: 0,
            lastModifiedBy: userId,
            lastModifiedAt: moment(),
        },
        {
            where: { id, createdBy: userId }
        }
    )

    return result
}
