import Express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'

import { PORT } from './config/server'

import task from './routes/task'
// import test from './routes/test'

let app = Express()

app.use(cors())

app.use(bodyParser.json({ 'limit': '10000kb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/task', task)
// app.use('/api/test', test)

if (module.parent) {
    module.exports = app
} else {
    app.listen(PORT, () => {
        console.log(`listening on :${PORT}`)
    })
}
