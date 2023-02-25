module.exports = {
  index: async function (req, res) {
    res.view('home/index');
  },

  en: async function (req, res) {
    res.view('home/en', { layout: 'layout_en' });
  },

  download: async function (req, res) {
  	res.download('Armygrid-Setup-0.0.1.exe')
  },
}