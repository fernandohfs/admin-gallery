module.exports = {
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: '1234',
  database: 'admin_fotos',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
