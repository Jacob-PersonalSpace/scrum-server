import Express from 'express'

import { wrapAsync } from '../middleware/error'

import { login } from '../bll/user/login'
import { getUserList } from '../bll/user/getUserList'

let router = Express()

router.post('/login', wrapAsync(async (req, res, next) => {
    const userName = req.body.userName,
        result = await login({ userName })

    res.status(200).json({
        code: 200,
        data: result
    })
}))

router.get('/getUserList', wrapAsync(async (req, res, next) => {
    const result = await getUserList()

    res.status(200).json({
        code: 200,
        data: result
    })
}))

export default router
