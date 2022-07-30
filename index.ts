import express from 'express'
import cors from 'cors'
import path from 'path'

import routes from './src/routes';
const server = require('http').createServer();
const port = process.env.PORT || 8090
const app = express()
const init = async () => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    routes(app)

    app.use(express.static(path.join(__dirname, '../public')))

    app.listen(port, () => console.log('🚀 Express is runing...'))
}

init()
