import Express from 'express'

import { wrapAsync } from '../middleware/error'

import { getCommentsByTaskId } from '../bll/comment/getComment'
import { addComment } from '../bll/comment/addComment'
import { deleteComment } from '../bll/comment/updateComment'

let router = Express()

router.get('/getCommentList', wrapAsync(async (req, res, next) => {
    const { taskId } = req.query,
        result = await getCommentsByTaskId({ taskId })

    res.status(200).json({
        code: 200,
        data: result
    })
}))

router.post('/addComment', wrapAsync(async (req, res, next) => {
    const { taskId, comment, userId } = req.body,
        result = await addComment({ taskId, comment, userId })

    res.status(200).json({
        code: 200,
        data: result
    })
}))

router.post('/deleteComment', wrapAsync(async (req, res, next) => {
    const { id, userId } = req.body,
        result = await deleteComment({ id, userId })

    res.status(200).json({
        code: 200,
        data: result
    })
}))

export default router
