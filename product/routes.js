const router = require('express').Router()
const services = require('./services')

router.post('/add',services.addProduct)
router.get('/view/:id', services.getProduct)

module.exports = router