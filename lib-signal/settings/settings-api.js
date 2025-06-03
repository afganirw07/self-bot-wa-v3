const fs = require('fs')

// =================== [ SETTINGS ] =================== 

// General Api
global.neoxrapi = "APIKEY"
global.ariekey = "APIKEY"
global.onekey = "APIKEY"
global.geminiToken = "AIzaSyDWmFlJuZPJ3YaZofARVYD4dMS9d1n0uN8"


// =================== [ ORKUT PAYMENT ] =================== 
 /*
  Api Orkut Pake PunyaMu.
  Daftarin sendiri di web atau app orkut. buat ambil qr
  Kalo G Dipake gush diisi 
 */

global.apiNevers = "new2025" // Yg Ini Gush Diganti
global.merchantIdOrderKuota = "OK2000300"
global.apiOrderKuota = "503037817337498462000300OKCTE710F6DB6C0525EF47135143AF15B565"
global.qrisOrderKuota = "000201021126670016COM.NOBUBANK.WWW011893600503000008791402145MI51440014ID.CO.QRIS.WWW0215ID20243611425300303KASI61051711108B"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})