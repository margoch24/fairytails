module.exports = {
  index: async function (req, res) {
    res.view('home/index');
  },

  en: async function (req, res) {
    res.view('home/en', { layout: 'layout_en' });
  }
}