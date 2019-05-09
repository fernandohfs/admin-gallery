const router = require('express').Router()
const multerConfig = require('../config/multer')
const upload = require('multer')(multerConfig)

const AlbumController = require('../app/controllers/AlbumController')
const PhotoController = require('../app/controllers/PhotoController')

router
  .route('/')
  .get(AlbumController.index)
  .post(upload.array('photos'), AlbumController.store)

router.route('/:albumId/photos/:photoId/del').get(PhotoController.destroy)

router
  .route('/:albumId/photos')
  .get(PhotoController.index)
  .post(upload.array('photos'), PhotoController.create)

module.exports = router
