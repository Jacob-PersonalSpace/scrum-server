import Express from 'express'
import { getCommentsByTaskId } from '../bll/comment/getComment'
import { addComment } from '../bll/comment/addComment'
import { deleteComment } from '../bll/comment/updateComment'

let router = Express()

router.get('/getCommentList', async (req, res, next) => {
    try {
        const { taskId } = req.query,
            result = await getCommentsByTaskId({ taskId })

        res.status = 200
        res.send(result)
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

router.post('/addComment', async (req, res, next) => {
    try {
        const { taskId, comment, userId } = req.body,
            result = await addComment({ taskId, comment, userId })

        res.status = 200
        res.send(result)
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

router.post('/deleteComment', async (req, res, next) => {
    try {
        const { id, userId } = req.body,
            result = await deleteComment({ id, userId })

        res.status = 200
        res.send({ result })
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

export default router
