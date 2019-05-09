class IndexController {
  create (req, res) {
    res.render('index')
  }
}

module.exports = new IndexController()
