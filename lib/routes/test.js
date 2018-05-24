import Express from 'express'

import { getCount } from '../dao/testDao'

let router = Express()

router.get('/getCount', (req, res, next) => {
    getCount(req, res, next)
})

export default router
