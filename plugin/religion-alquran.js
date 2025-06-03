let handler = async (m, { Lyrra, args, prefix, command }) => {
    if (!(args[0] || args[1])) return m.reply(`• *Example :* ${prefix + command} 1 2 maka hasilnya adalah surah Al-Fatihah ayat 2`)
    if (isNaN(args[0]) || isNaN(args[1])) return m.reply(`• *Example :* ${prefix + command} 1 2 maka hasilnya adalah surah Al-Fatihah ayat 2`)
    let res = await alquran(args[0], args[1])

    if (!res) return m.reply('Error: Tidak dapat menemukan data Al-Quran')

    m.reply(`
${res.arab}
${res.latin}

${res.terjemahan}
${readMore}
${res.tafsir}

( ${res.surah} )
`)
}
handler.help = ["alquran *<114> <1>*"]
handler.tags = ["islami"]
handler.command = ["alquran", "al-quran"]
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch')
const cheerio = require('cheerio')
async function alquran(surah, ayat) {
    let res = await fetch(`https://kalam.sindonews.com/ayat/${ayat}/${surah}`)
    if (!res.ok) throw 'Error, maybe not found?'
    let $ = cheerio.load(await res.text())
    let content = $('body > main > div > div.content.clearfix > div.news > section > div.list-content.clearfix')
    let Surah = $(content).find('div.ayat-title > h1').text()
    let arab = $(content).find('div.ayat-detail > div.ayat-arab').text()
    let latin = $(content).find('div.ayat-detail > div.ayat-latin').text()
    let terjemahan = $(content).find('div.ayat-detail > div.ayat-detail-text').text()
    let tafsir = ''
    $(content).find('div.ayat-detail > div.tafsir-box > div').each(function () {
        tafsir += $(this).text() + '\n'
    })
    tafsir = tafsir.trim()
    return {
        surah: Surah,
        arab,
        latin,
        terjemahan,
        tafsir,
    }
}
