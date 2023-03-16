module.exports = {
  index: async function (req, res) {
    res.view('home/index', { auth: false, books: false });
  },
  authors: async function (req, res) {
    res.view('home/authors', { auth: true, books: false });
  }
}