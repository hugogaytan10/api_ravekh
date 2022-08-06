import routes from './src/routes';
const port = process.env.PORT || 8090
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const init = async () => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    routes(app)

    app.listen(port, () => console.log('🚀 Express is runing...'))
}

init()
