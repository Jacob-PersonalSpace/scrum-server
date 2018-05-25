import Express from 'express'
import { getTaskList } from '../bll/task/getTasks'
import { createTask } from '../bll/task/createTask'
import { updateTask } from '../bll/task/updateTask'

let router = Express()

router.get('/getTaskList', async (req, res, next) => {
    try {
        const result = await getTaskList()

        res.status = 200
        res.send(result)
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

router.post('/createTask', async (req, res, next) => {
    try {
        const requestBody = req.body

        const result = await createTask(requestBody)

        res.status = 200
        res.send(result)
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

router.post('/updateTask', async (req, res, next) => {
    try {
        const requestBody = req.body

        const result = await updateTask(requestBody)

        res.status = 200
        res.send({ result })
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

export default router
