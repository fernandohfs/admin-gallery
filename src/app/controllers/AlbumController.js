const { Album, Photo } = require('../models')

class AlbumController {
  async index (req, res) {
    const albums = await Album.findAll({
      order: [['created_at', 'DESC']]
    })

    return res.render('albums/index', { albums })
  }
  async store (req, res) {
    const album = await Album.create(req.body)
    const photos = req.files

    const bulkPhotos = photos.map(photo => {
      return {
        name: photo.filename,
        original_name: photo.originalname,
        album_id: album.id
      }
    })

    await Photo.bulkCreate(bulkPhotos)

    return res.redirect('/albums')
  }
}

module.exports = new AlbumController()
