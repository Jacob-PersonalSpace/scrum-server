import User from '../../model/user'

export const login = async ({ userName }) => {
    const row = await User.findOne({
        attributes: ["id", "userName"],
        where: {
            userName,
            status: 1
        }
    })

    return row
}
