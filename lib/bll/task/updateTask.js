import mysqlPool from '../mysqlPool'

export const updateTaskStatus = async () => {
    try {
        const a = await mysqlPool.execute('UPDATE Task SET status = ? WHERE id = ?', [status, id])

        console.log('??', a)

        return Promise.resolve(a)
    } catch (error) {
        return Promise.reject(error)
    }
}
