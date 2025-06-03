let fs = require("fs");
let handler = async (m, { Lyrra }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  let anu;
  if (global.db.data.users[who]) {
    anu = `
🏦 Bank *${global.db.data.erpg[who].bank}*
*${global.db.data.users[who].exp}* Exp ✨
*${global.db.data.users[who].limit}* Limit 📊
*${global.db.data.users[who].saldo}* Money 💵`;
  } else {
    anu = `User tidak ditemukan`;
  }
  await Lyrra.sendMessage(
    m.chat,
    {
      text: anu,
      contextInfo: {
        externalAdReply: {
          title: "ISI DOMPET",
          body: "info Dompet User Bot",
          thumbnailUrl: "https://telegra.ph/file/bb562cfd966da4ed5b81a.jpg",
          sourceUrl: "",
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: m },
  );
};

handler.help = ["dompet"];
handler.tags = ["rpg"];
handler.command = ["dompet"];

module.exports = handler;
