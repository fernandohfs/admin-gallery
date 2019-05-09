const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const dateFilter = require('nunjucks-date-filter')

class Server {
  constructor () {
    this.app = express()
    this._isDev = process.env.NODE_ENV || 'production'

    this._middlewares()
    this._views()
    this._routes()
  }

  _middlewares () {
    this.app.use(express.urlencoded({ extended: false }))
  }

  _views () {
    const env = nunjucks.configure(
      path.resolve(__dirname, '..', 'app', 'views'),
      {
        watch: this._isDev,
        express: this.app,
        autoescape: true
      }
    )

    env.addFilter('date', dateFilter)

    this.app.use(express.static(path.resolve(__dirname, '..', 'public')))
    this.app.set('view engine', 'njk')
  }

  _routes () {
    require('../routes/routes')(this.app)
  }
}

module.exports = new Server().app
