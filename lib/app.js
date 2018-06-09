import 'babel-core/register'
import 'babel-polyfill'

import Express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import methodOverride from 'method-override'

import { PORT } from './config/server'

import task from './routes/task'
import user from './routes/user'
import comment from './routes/comment'

let app = Express()

app.use(cors())

app.use(bodyParser.json({ 'limit': '10000kb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/task', task)
app.use('/api/user', user)
app.use('/api/comment', comment)

app.use(function (err, req, res, next) {
    res.status(200).json({
        code: 500,
        message: err.message || err
    });
});

if (module.parent) {
    module.exports = app
} else {
    app.listen(PORT, () => {
        console.log(`listening on :${PORT}`)
    })
}
