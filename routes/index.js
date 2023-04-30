const router = require('express').Router()
const htmlRoutes = require('./htmlroute')
const apiRoutes = require('./api/noteRoutes')


router.use('/',htmlRoutes)
router.use('/api',apiRoutes)

module.exports = router