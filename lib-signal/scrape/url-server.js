const fs = require('fs')
const axios = require('axios')
const FormData = require('form-data');

async function uploadCatBox(path) {
    const data = new FormData()
    data.append('reqtype', 'fileupload')
    data.append('userhash', '')
    data.append('fileToUpload', fs.createReadStream(path))
    const config = {
      method: 'POST',
      url: 'https://catbox.moe/user/api.php',
      headers: {
        ...data.getHeaders(),
        'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
      },
      data: data
    }
    const api = await axios.request(config)
    return api.data
  }
  
  async function uploadTelegraph(path) {
    try {
        let data = new FormData();
        data.append("images", fs.createReadStream(path));

        let config = {
            method: 'POST',
            url: 'https://telegraph.zorner.men/upload',
            headers: {
                ...data.getHeaders()
            },
            data: data
        };

        let response = await axios.request(config);
        return response.data.links || 'Gagal mengupload';
    } catch (error) {
        console.error("Error Upload:", error.message);
        return 'Error saat mengupload';
    }
}
module.exports = {
    uploadCatBox,
    uploadTelegraph
}