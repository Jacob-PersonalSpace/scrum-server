import Express from 'express'

import { getUser } from '../dao/userDao'

let router = Express()

router.get('/getUsers', (req, res, next) => {
    getUser(req, res, next)
})

export default router
