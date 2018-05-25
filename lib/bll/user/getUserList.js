import User from '../../model/user'

export const getUserList = async () => {
    const rows = await User.findAll({
        attributes: ["id", "userName", "color"],
        where: {
            status: 1
        }
    })

    return Promise.resolve(rows)
}