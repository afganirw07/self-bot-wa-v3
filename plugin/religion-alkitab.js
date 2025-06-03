const axios = require("axios");
const cheerio = require("cheerio");

let handler = async (m, { text, prefix, Lyrra, command }) => {
  if (!text) return m.reply(`uhm.. teksnya mana?\n\ncontoh:\n${prefix + command} kejadian`);

  try {
    let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(text)}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
      }
    });

    let $ = cheerio.load(res.data);
    let result = [];

    $('div.vw').each(function (a, b) {
      let teks = $(b).find('p').text().trim();
      let link = $(b).find('a').attr('href');
      let title = $(b).find('a').text().trim();
      result.push({ teks, link, title });
    });

    let foto = 'https://telegra.ph/file/a333442553b1bc336cc55.jpg';
    let judul = '*───────「 Alkitab 」 ───────*';
    let caption = result.map(v => ` ${v.title}\n ${v.teks}`).join('\n┄┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┄\n');

    await Lyrra.sendMessage(m.chat, { image: { url: foto }, caption: `${judul}\n\n${caption}` }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan saat mencari data Alkitab.');
  }
};

handler.help = ['alkitab'].map(v => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = ["alkitab"];

module.exports = handler;