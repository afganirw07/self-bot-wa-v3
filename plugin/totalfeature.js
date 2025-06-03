const fs = require("fs");
const path = require("path");
const pluginsFolderPath = './plugin';
let handler = async (m, { Lyrra, prefix, command }) => {
  try {
    const pluginFiles = fs.readdirSync(pluginsFolderPath);
    const jsFiles = pluginFiles.filter(file => file.endsWith(".js"));
    if (jsFiles.length === 0) {
      return m.reply("Tidak ada file plugin ditemukan di folder plugins.");
    }
    let detectedCommands = 0;
    for (const file of jsFiles) {
      const filePath = path.join(pluginsFolderPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const commandMatches = fileContent.match(/handler\.command\s*=\s*\[(.*?)\]/);
      if (commandMatches) {
        const commands = commandMatches[1].split(',').map(cmd => cmd.trim().replace(/['"]/g, ''));
        detectedCommands += commands.length;
      }
    }
    
    const pluginCaseFiles = fs.readdirSync(pluginsFolderPath);
    const caseJsFiles = pluginCaseFiles.filter(file => file.endsWith(".js"));
    if (jsFiles.length === 0) {
      return m.reply("Tidak ada file plugin ditemukan di folder plugins.");
    }
    let detectedCaseCommands = 0;
    for (const file of caseJsFiles) {
      const filePath = path.join(pluginsFolderPath, file);
      const fileContentt = fs.readFileSync(filePath, "utf8");
      const commandMatches = (fileContentt.match(/(?<!\/\/)(case\s+['"][^'"]+['"])/g) || [])
    }
    
    const totalfunct = () => {
      try {
        const funct = fs.readFileSync('./Lyrra.js', 'utf8');
        const functs = (funct.match(/function/g) || [])
          .length;
        return functs;
      } catch (err) {
        console.error('Error:', err);
        return 0;
      }
    };
    
    const totalfunct2 = () => {
      try {
        const funct2 = fs.readFileSync('./x-system/data-utils/scrape.js', 'utf8');
        const functs2 = (funct2.match(/function/g) || [])
          .length;
        return functs2;
      } catch (err) {
        console.error('Error:', err);
        return 0;
      }
    };

    const totalFitur = () => {
      try {
        const mytext = fs.readFileSync('./Lyrra.js', 'utf8');
        const numCases = (mytext.match(/(?<!\/\/)(case\s+['"][^'"]+['"])/g) || [])
          .length;
        return numCases;
      } catch (err) {
        console.error('Error:', err);
        return 0;
      }
    };

    if (detectedCommands > 0) {
    try {
await Lyrra.sendMessage(m.chat,
    {
        pollResult: {
            name: `*Total Feature List*\n*Total All Feature : ${detectedCommands + detectedCaseCommands + totalFitur()}*`,
            votes: [["Total Feature Plugin", `${detectedCommands}`], ["Total Feature Case", `${totalFitur()}`], ["*Total Semua Feature*", `${detectedCommands + detectedCaseCommands + totalFitur()}`]],
        }
    }, { quoted : m })
    } catch (err) {
    await m.reply(`
*Total Fitur Plugin:* ${detectedCommands}
*Total Fitur Case:* ${totalFitur()}

*TOTAL SEMUA FITUR ${detectedCommands + detectedCaseCommands + totalFitur()}*

> ${global.botname}`)
    }
    } else {
      m.reply("Gagal Mendeteksi...");
    }
  } catch (err) {
        console.error(err)
        m.reply(err)
  }
};

handler.help = ["totalfeature"];
handler.tags = ["plugin"];
handler.command = ["totalplug", "fitur", "totalfunct", "totalfunction", "totalcase", "totalplugin", "totalpl" ,"ttf", "totalfitur", "totalfeature"];

module.exports = handler
