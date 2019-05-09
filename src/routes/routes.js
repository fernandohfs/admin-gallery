const index = require('./index')
const albuns = require('./albums')
const files = require('./files')

module.exports = app => {
  app.use('/', index), app.use('/albums', albuns), app.use('/files', files)
}
