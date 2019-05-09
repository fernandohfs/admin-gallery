const router = require('express').Router()

const IndexController = require('../app/controllers/IndexController')

router.route('/').get(IndexController.create)

module.exports = router
