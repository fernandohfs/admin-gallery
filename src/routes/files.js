const router = require('express').Router()

const FileController = require('../app/controllers/FileController')

router.route('/:file').get(FileController.show)

module.exports = router
