module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    name: DataTypes.STRING,
    original_name: DataTypes.STRING
  })

  Photo.associate = models => {
    Photo.belongsTo(models.Album, { as: 'album', foreignKey: 'album_id' })
  }

  return Photo
}
