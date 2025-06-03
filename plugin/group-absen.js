let handler = async (m, { Lyrra, prefix, isGroup }) => {
    if (!m.isGroup) return m.reply('Khusus Group')
    let id = m.chat
    Lyrra.absen = Lyrra.absen ? Lyrra.absen : {}
    if (!(id in Lyrra.absen)) return m.reply(`🚩 _*Tidak ada absen berlangsung digrup ini!*_\n\n*${prefix}mulaiabsen* - untuk memulai absen`)

    let absen = Lyrra.absen[id]
    if (!Array.isArray(absen[1])) absen[1] = [] 
    if (typeof absen[2] !== 'string') absen[2] = '-' 
    
    const wasVote = absen[1].includes(m.sender)
    if (wasVote) return m.reply('🚩 *Kamu sudah absen!*')
    absen[1].push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen[1].map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    m.reply(`*「 ABSEN 」*

Tanggal: ${date}
${absen[2]}

┌ *List absen:*
│ 
│ Total: ${absen[1].length}
${list}
│ 
└────

_${global.wm}_`)
}
handler.help = ["absen"]
handler.tags = ["absen"]
handler.command = ["absen", "hadir"]
module.exports = handler
