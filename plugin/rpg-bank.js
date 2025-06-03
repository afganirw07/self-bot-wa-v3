let handler = async (m, { Lyrra, isPremium }) => {
  const caption = `
⛊「 *B A N K  U S E R* 」
│ 📛 *Name:* ${global.db.data.users[m.sender].nama}
│ 🏛️ *atm:* ${global.db.data.erpg[m.sender].bank} 💲
│ 💹 *saldo:* ${global.db.data.users[m.sender].saldo} 💲
│ 🌟 *Status:* ${isPremium ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${global.db.data.users[m.sender].daftar ? 'Yes' : 'No'}
╰──┈┈⭑
`
  await Lyrra.sendMessage(
    m.chat,
    {
      text: caption,
      contextInfo: {
        externalAdReply: {
          title: "BANK USER",
          body: "Info bank user",
          thumbnailUrl: "https://telegra.ph/file/8172419ad03cd5782f12d.jpg",
          sourceUrl: "",
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: m },
  );
};
handler.help = ["bank"];
handler.tags = ["rpg"];
handler.command = ["bank"];

handler.register = false;
module.exports = handler;