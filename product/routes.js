const router = require('express').Router()
const services = require('./services')

router.post('/add',services.addProduct)
router.get('/view/:id', services.getProduct)
router.get('/list', services.listProduct)
router.put('/update/:id',services.updateProduct)
router.delete('/delete/:id', services.deleteProduct)

module.exports = router