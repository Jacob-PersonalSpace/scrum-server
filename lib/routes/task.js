import Express from 'express'
import { getTaskList } from '../bll/task/getTasks'

let router = Express()

router.get('/getAllTasks', async (req, res, next) => {
    try {
        const result = await getTaskList()

        res.status = 200
        res.send(result)
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

export default router
