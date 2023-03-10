module.exports = {
  index: async function (req, res) {
    req.setLocale(req.query.locale);
    res.view('home/index', { locale: req.getLocale() });
  }
}