let handler = async (m, { prefix, Lyrra, isGroup, isAdmins, isOwner, text }) => {
    if (!m.isGroup) return m.reply('Khusus Group')
        if (!isAdmins && !isOwner) return m.reply('Khusus Admin')
    Lyrra.absen = Lyrra.absen ? Lyrra.absen : {}
    let id = m.chat
    if (id in Lyrra.absen) {
        return m.reply(`🚩 _*Masih ada absen di chat ini!*_\n\n*${prefix}hapusabsen* - untuk menghapus absen`)
    }
    Lyrra.absen[id] = [
        m.reply(`🚩 Berhasil memulai absen!\n\n*${prefix}absen* - untuk absen\n*${prefix}cekabsen* - untuk mengecek absen\n*${prefix}hapusabsen* - untuk menghapus data absen`)
    ]
}
handler.help = ['mulaiabsen *<teks>*']
handler.tags = ['absen']
handler.command = ['mulaiabsen', 'startabsen']

handler.admin = true
module.exports = handler
