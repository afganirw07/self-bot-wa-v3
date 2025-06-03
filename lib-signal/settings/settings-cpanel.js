const fs = require('fs')

// =================== [ CPANEL AREA ] =================== 


// Ganti kalo dipake, kalo ngga gausah ganti
global.panel = {
  p1gb: 1000, // Harga Panel 1Gb
  p2gb: 2000, // Harga Panel 2Gb
  p3gb: 3000, // Harga Panel 3Gb
  p4gb: 4000, // Harga Panel 4Gb
  p5gb: 5000, // Harga Panel 5Gb
  p6gb: 6000, // Harga Panel 6Gb
  p7gb: 7000, // Harga Panel 7Gb
  p8gb: 8000, // Harga Panel 8Gb
  p9gb: 9000, // Harga Panel 9Gb
  p10gb: 10000, // Harga Panel 10Gb
  punli: 12000, // Harga Panel Unli
  adp: 15000, // Harga Adp
  ress: 20000, // Harga Reseller
}

// =================== [ CPANEL AREA 1 ] =================== 
// Default (Utama)
global.domain = "https://contoh-nama.id/" // Domain harus diakhiri tanda [ / ]
global.apikey = "ptla_m2iWMa1Sld" // Plta
global.capikey = "ptlc_K2TOuDgWb1" // Pltc
global.eggs = "15"
global.locc = "1"

// =================== [ CPANEL AREA 2 ] =================== 
global.domain2 = "" // Domain harus diakhiri tanda [ / ]
global.apikey2 = "" // Plta
global.capikey2 = "" // Pltc
global.eggs2 = "15"
global.locc2 = "1"

// =================== [ CPANEL AREA 3 ] =================== 
global.domain3 = "" // Domain harus diakhiri tanda [ / ]
global.apikey3 = "" // Plta
global.capikey3 = "" // Pltc
global.eggs3 = "15"
global.locc3 = "1"

// =================== [ CPANEL AREA 4 ] =================== 
global.domain4 = "" // Domain harus diakhiri tanda [ / ]
global.apikey4 = "" // Plta
global.capikey4 = "" // Pltc
global.eggs4 = "15"
global.locc4 = "1"

// =================== [ CPANEL AREA 5 ] =================== 

global.domain5 = "" // Domain harus diakhiri tanda [ / ]
global.apikey5 = "" // Plta
global.capikey5 = "" // Pltc
global.eggs5 = "15"
global.locc5 = "1"


// =================== [ CPANEL AREA END ] =================== 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})