const { Album, Photo } = require('../models')

class PhotoController {
  async index (req, res) {
    const photos = await Photo.findAll({
      include: [
        {
          model: Album,
          as: 'album'
        }
      ],
      where: { album_id: req.params.albumId },
      order: [['created_at', 'DESC']]
    })

    return res.render('photos/index', { photos, album_id: req.params.albumId })
  }

  async create (req, res) {
    const photos = req.files

    const bulkPhotos = photos.map(photo => {
      return {
        name: photo.filename,
        original_name: photo.originalname,
        album_id: req.params.albumId
      }
    })

    await Photo.bulkCreate(bulkPhotos)

    return res.redirect(`/albums/${req.params.albumId}/photos`)
  }

  async destroy (req, res) {
    await Photo.destroy({
      where: {
        id: req.params.photoId,
        album_id: req.params.albumId
      }
    })

    return res.redirect(`/albums/${req.params.albumId}/photos`)
  }
}

module.exports = new PhotoController()
