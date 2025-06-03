const fs = require('fs')

// ================= [ PAIRING SETTINGS ] ================= //
global.pairingCode = true // true = pairing code | false = scan QR
global.paiCode = "llllllll" // Wajib 8 digit pairing code (custom)
global.broswer = "Firefox" // Server Browser 

// ================= [ SYSTEM SETTINGS ] ================= //
global.sessionName = "session" // Nama file session

// ================= [ BOT PROFILE SETTINGS ] ================= //
global.storename = "𝘓𝘺𝘺𝘳𝘢 𝘌𝘷𝘢𝘯𝘵𝘩𝘦 🍃" // Store name
global.botname = "𝘓𝘺𝘺𝘳𝘢 𝘌𝘷𝘢𝘯𝘵𝘩𝘦 🍃" // Bot name
global.ownername = "Ayame Senpai" // Owner name
global.owner = "6282261639578" // Owner number
global.botNumber = "6283893078836" //  Bot number
global.version = "3.0.0" // Version

global.packname = "Lyrra-Evanth" // Sticker packname 
global.author = "Ai-Meta" // Sticker author

global.web = "" // Home web
global.wm = "𝘓𝘺𝘺𝘳𝘢 𝘌𝘷𝘢𝘯𝘵𝘩𝘦" // Watermark thumbnail
global.wmbotfo = "Lyrra Inteligence" // Pakai font default

// ================== [ ID & CHANNEL LINKS ] ================== //
global.chjid = "120363345772469517" // Channel Id Gaush pakai @
global.gcjid = "" // Group Id Gaush pakai @

global.sch = "https://whatsapp.com/channel/0029VarFmXW4Spk7e033IG0W"
global.sgc = "https://chat.whatsapp.com/KdfviO75ebv0F5YkHDLbqi"
global.stg = "https://t.me/"
global.syt = "https://www.youtube.com/@Ayamenew"
global.sig = "https://instagram.com/"

// ================== [ MEDIA & REACTIONS ] ================== //
global.thumb = "https://files.catbox.moe/lgzcfx.jpg" // Utama 
global.thumb2 = "https://files.catbox.moe/lgzcfx.jpg" // Opsional 
global.audiofetch = "https://files.catbox.moe/fa9u0q.mp3" // Audio

global.reactload = "⏱️" // React Messages 
global.vtampt = '`' // Don't change 
global.xvarc = "/" // Don't change 

global.vircsetz = ['☼', '✘', '✦', '✧', '❀', '○', '⏣', '♧', '々', '〆', '✎'] // Emoticon
global.swreact = ['😐', '🗿', '😮‍💨', '🥱', '😱', '😔', '🤔', '🫡'] // React Sw

// ================== [ BOT SEWA / RENTAL ] ================== //
global.botsewa = {
  day5: "5000", // = 5k
  day10: "10000", // = 10k
  day15: "15000", // = 15k
  day30: "27000", // = 30 
  dayunli: "70000" // = 70k
}

// ================== [ PAYMENT SETTINGS ] ================== //
global.payment = {
  dana: "-", // Dana
  gopay: "-", // Gopay
  ovo: "-", // Ovo
  rek: "-", // Rekening 
  qris: "https://files.catbox.moe/m261io.jpg", // Qris url
  linkaja: "-", // LinkAja
  shopeepay: "-" // ShopeePay
}

// =============== [ STATUS SEND FUNCTION ] ================ //
global.sendsq = (a, b) => {
  return {
    key: {
      remoteJid: 'status@broadcast',
      participant: '0@s.whatsapp.net'
    },
    message: {
      orderMessage: {
        itemCount: 1000,
        status: 1,
        surface: 1,
        message: a,
        orderTitle: '',
        thumbnail: b,
        sellerJid: '0@s.whatsapp.net'
      }
    }
  }
}

// ================= [ AUTO RELOAD CONFIG ] ================= //
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})