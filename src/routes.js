const express = require('express')
const DevController = require('./controllers/DevController')
const DislikeController = require('./controllers/DislikeController')
const LikeController = require('./controllers/LikeController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ message: `Olá mundo` })
})

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

module.exports = routes