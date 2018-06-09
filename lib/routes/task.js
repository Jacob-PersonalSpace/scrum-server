import Express from 'express'

import { wrapAsync } from '../middleware/error'

import { getTaskList } from '../bll/task/getTasks'
import { createTask } from '../bll/task/createTask'
import { updateTask } from '../bll/task/updateTask'

let router = Express()

router.get('/getTaskList', wrapAsync(async (req, res, next) => {
    const result = await getTaskList()

    res.status(200).json({
        code: 200,
        data: result
    })
}))

router.post('/createTask', async (req, res, next) => {
    const requestBody = req.body,
        result = await createTask(requestBody)

    res.status(200).json({
        code: 200,
        data: result
    })
})

router.post('/updateTask', async (req, res, next) => {
    const requestBody = req.body,
        result = await updateTask(requestBody)

    res.status(200).json({
        code: 200,
        data: result
    })
})

export default router
