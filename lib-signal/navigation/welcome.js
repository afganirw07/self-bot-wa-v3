require('../settings/settings')
const { generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, InteractiveMessage, proto, delay
} = require('baileys')
const axios = require('axios')
const chalk = require('chalk')
const fs = require('fs')
const FileType = require('file-type')
const nou = require('node-os-utils')
const os = require('os')
const path = require('path')
const { getInput, notifGroup } = require('../data-utils/scrape')

let setting = JSON.parse(fs.readFileSync('./config-db-set.json'));

module.exports.welcome = async (iswel, isleft, Lyrra, anu) => {
  try {
    const metadata = await Lyrra.groupMetadata(anu.id)
    const participants = anu.participants
    const memeg = metadata.participants.length;
    const groupName = metadata.subject
    const groupDesc = metadata.desc
    const isWelcomeEnabled = global.db.data.chats[anu.id]?.wlcm;
    const isLeftEnabled = global.db.data.chats[anu.id]?.left;
    
    const welcomeType = setting.tipewelcome || "v1";
    
    let avatarUrl, ppgroup;
    const num = participants[0];
    const mentionedJid = [num].map(v => v + '@s.whatsapp.net');
    
    try {
      avatarUrl = await Lyrra.profilePictureUrl(num, 'image');
    } catch {
      avatarUrl = 'https://telegra.ph/file/750ed3947ea3722c20b77.png';
    }
    
    try {
      ppgroup = await Lyrra.profilePictureUrl(anu.id, 'image')
    } catch {
      ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
    }
    
    const welcomeOptions = {
      backgroundURL: 'https://files.catbox.moe/rpdw0z.jpg',
      avatarURL: avatarUrl,
      title: 'Welcome',
      description: 'Welcome - Selamat Datang',
      gcnameinf: `Group : ${groupName}`,
      poweredBot: `WhatsApp Bot - ${global.wmbotfo}`,
      gcmemberke: `Member Ke : ${metadata.participants.length}`
    };
    
    const goodbyeOptions = {
      backgroundURL: 'https://files.catbox.moe/rpdw0z.jpg',
      avatarURL: avatarUrl,
      title: 'Goodbye',
      description: 'Goodbye - Selamat Tinggal',
      gcnameinf: `Group : ${groupName}`,
      poweredBot: `WhatsApp Bot - ${global.wmbotfo}`,
      gcmemberke: `Member Ke : ${metadata.participants.length + 1}`
    };
    
    if (anu.action == 'add' && (iswel || isWelcomeEnabled)) {
      if (global.db.data.chats[anu.id]?.text_welcome) {
        var get_teks_welcome = global.db.data.chats[anu.id].text_welcome;
        var replace_pesan = (get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`));
        var full_pesan = (replace_pesan.replace(/@group/gi, metadata.subject).replace(/@desc/gi, metadata.desc));
      } else {
        var full_pesan = `Welcome @${num.split('@')[0]}\nTo Group : ${groupName}`;
      }
      
        const wlcmnotif = await notifGroup(welcomeOptions);
        const buttonsn = [{
          "name": "quick_reply",
          "buttonParamsJson": `{\"display_text\":\"Welcome 👋🏻\",\"id\":\"kbn\"}`
        }];
        Lyrra.sendButtonsImage(anu.id, null, full_pesan, wlcmnotif, buttonsn, null);
    }
    
    if (anu.action == 'remove' && (isleft || isLeftEnabled)) {
      if (global.db.data.chats[anu.id]?.text_left) {
        var get_teks_left = global.db.data.chats[anu.id].text_left;
        var replace_pesan = (get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`));
        var full_pesan = (replace_pesan.replace(/@group/gi, metadata.subject).replace(/@desc/gi, metadata.desc));
      } else {
        var full_pesan = `Goodbye @${num.split('@')[0]}\nTo Group ${groupName}`;
      }
      
        const leftnotif = await notifGroup(goodbyeOptions);
        const buttoonsn = [{
          "name": "quick_reply",
          "buttonParamsJson": `{\"display_text\":\"Goodbye 👋🏻\",\"id\":\"kbn\"}`
        }];
        Lyrra.sendButtonsImage(anu.id, null, full_pesan, leftnotif, buttoonsn, null);
    }
    
  } catch (err) {
    console.error(err);
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})