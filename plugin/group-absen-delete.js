let handler = async (m, { prefix, Lyrra, isGroup, isAdmins, isOwner, text }) => {
    if (!m.isGroup) return m.reply('Khusus Group')
        if (!isAdmins && !isOwner) return m.reply('Khusus Admin')
    let id = m.chat
    Lyrra.absen = Lyrra.absen ? Lyrra.absen : {}
    if (!(id in Lyrra.absen)) return m.reply(`🚩 _*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`)
    delete Lyrra.absen[id]
    m.reply(`Done!`)
}
handler.help = ["hapusabsen"]
handler.tags = ["absen"]
handler.command = ["deteleabsen", "delabsen", "hapusabsen"]

module.exports = handler
