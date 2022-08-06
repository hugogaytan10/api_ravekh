import routes from './src/routes';
const port = process.env.PORT || 8090
const express = require('express')
const cors = require('cors')
const app = express()
const init = async () => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    routes(app)

    app.listen(port, () => console.log('🚀 Express is runing...'))
}

init()
