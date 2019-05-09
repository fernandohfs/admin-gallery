module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  })

  return Album
}
