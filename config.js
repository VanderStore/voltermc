/**
   * Create By Dika Ardnt.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

// Other
global.owner = ['12053901620']
global.ownernomer = "12053901620"
global.premium = ['12053901620','12053901620']
global.packname = 'Bot'
global.author = 'Volter'
global.sessionName = 'volter'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '*_Done Kack_*',
    admin: '*_Fitur Khusus Admin Group!_*',
    botAdmin: '*_Bot Harus Menjadi Admin Terlebih Dahulu Kack !!_*',
    premime: '*_Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa_*',
    owner: '*_Fitur Khusus Owner Bot_*',
    group: '*_Fitur Digunakan Hanya Untuk Group!_*',
    private: '*_Fitur Digunakan Hanya Untuk Private Chat!_*',
    bot: '*_Fitur Khusus Pengguna Nomor Bot_*',
    wait: '*_Proses Ya Kack_*',
    endLimit: '*_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_*',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./image/volter.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
