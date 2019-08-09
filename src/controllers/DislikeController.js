const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        const { params: { devId }, headers: { user } } = req

        const loggedDev = await Dev.findById(user)
        const targetDev = await Dev.findById(devId)

        if (!targetDev) res.status(400).json({ error: 'Dev not exists.' })

        loggedDev.dislikes.push(targetDev._id)

        await loggedDev.save()

        return res.json(loggedDev)
    }
}