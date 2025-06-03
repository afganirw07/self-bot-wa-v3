let handler = async (m, { Lyrra, prefix, isGroup }) => {
    if (!m.isGroup) return m.reply('Khusus Group')
    let id = m.chat
    Lyrra.absen = Lyrra.absen ? Lyrra.absen : {}
    if (!(id in Lyrra.absen)) return m.reply(`🚩 _*Tidak ada absen berlangsung digrup ini!*_\n\n*${prefix}mulaiabsen* - untuk memulai absen`)

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    let absen = Array.isArray(Lyrra.absen[id][1]) ? Lyrra.absen[id][1] : []
    let description = typeof Lyrra.absen[id][2] === 'string' ? Lyrra.absen[id][2] : '-'

    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    m.reply(`*「 ABSEN 」*

Tanggal: ${date}
${description}

┌ *List absen:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

_${global.wm}_`)
}
handler.help = ["cekabsen"]
handler.tags = ["absen"]
handler.command = ["cekabsen", "absencek"]

module.exports = handler
