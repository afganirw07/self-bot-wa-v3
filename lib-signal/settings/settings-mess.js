const fs = require('fs')

// =================== [ MESSAGE SETTINGS ] ===================
global.mess = {
  owner: "*Oops... This command is only owner! (눈‸눈)*",
  prem: "*Oops... This feature is only premium! (눈‸눈)*",
  grup: "*Oops... This feature is only group chats! (눈‸눈)*",
  privat: "*Oops... This feature is only private chats! (눈‸눈)*",
  admin: "*Oops... This feature is only admins! (눈‸눈)*",
  botadmin: "*Oops... The bot is not an admins! (눈‸눈)*",
  op: "*Oops... This feature is only premium! (눈‸눈)*",
  or: "*Oops... This feature is only resellers! (눈‸눈)*",
  ob: "*Oops... This feature is only bot owner! (눈‸눈)*",
  oa: "*Oops... This feature is only admins! (눈‸눈)*"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})