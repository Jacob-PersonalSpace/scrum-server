import Express from 'express'
import { login } from '../bll/user/login'
import { getUserList } from '../bll/user/getUserList'

let router = Express()

router.post('/login', async (req, res, next) => {
    try {
        const userName = req.body.userName

        const result = await login({ userName })

        res.status = 200
        res.send(result)
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

router.get('/getUserList', async (req, res, next) => {
    try {
        const result = await getUserList()

        res.status = 200
        res.send(result)
    } catch (error) {
        res.status = 500

        res.send(error)
    }
})

export default router
