import Comment, { sequelize, Sequelize } from '../../model/comment'
import User from '../../model/user'

User.hasMany(Comment, { foreignKey: 'id' })
Comment.belongsTo(User, { foreignKey: 'createdBy' })

const Op = Sequelize.Op

export const getCommentsByTaskId = async ({ taskId }) => {
    const rows = await Comment.findAll({
        attributes: ["id", "taskId", "comment", "createdAt", "createdBy"],
        where: { status: { [Op.gt]: 0 }, taskId: { [Op.eq]: taskId } },
        order: [[
            'createdAt', 'DESC'
        ]],
        include: [{
            model: User,
            required: true,
            // as: 'Singer',
            attributes: ["userName"]
            // through: { attributes: ["userName"] }
        }]
    })

    return Promise.resolve(rows)
}
