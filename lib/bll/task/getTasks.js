import mysqlPool from '../mysqlPool'

export const getTaskList = async () => {
    try {
        const [rows] = await mysqlPool.execute('SELECT * FROM Task')

        return Promise.resolve(rows)
    } catch (error) {
        return Promise.reject(error)
    }
}
