

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['559391919748'] //ur owner number
global.ownername = "SupraOfc"
global.ytname = "YT: SUPRA OFC" //ur yt chanel name
global.socialm = "GitHub: SupraOfc " //ur github or insta name
global.location = "Brasil" //ur location

//bot bombdy
global.botname = "Lhanna Bot" //ur bot name
global.websitex = "https://youtube.com/c/SUPRAOFC" //ur website
global.vidmenu = { url: 'https://a.uguu.se/zlzQZvXH.mp4' } //gif and video menu
global.packname = "Newton(SupraGoxtosa)\n\n\n\n\n\nchama:\n+55 93 9191-9748 "
global.author = "🦄LhannaBOT\n\n\n\n\n\n\n🐦🐦🐦"
global.themeemoji = "🐶"
global.reactmoji = "😘"
global.ownertag = ['ur number'] //ur owner tag
global.ownernummenu = ['ur number'] //ur owner number in menu and all
global.watermark = "Xeon Bot Inc." //ur watermark
global.botscript = "https://supraz.herokuapp.com/"
global.linkz1 = "https://chat.whatsapp.com/J0IEWFm9FIA5pzSqWz1kxP"
global.linkz2 = "https://chat.whatsapp.com/KS6dvOv8AMWLRgZtW0FvRm"

//Bot theme media
global.thum = fs.readFileSync("./LhannaMedia/theme/cheemspic.jpg")
global.log0 = fs.readFileSync("./LhannaMedia/theme/cheemspic.jpg")
global.err4r = fs.readFileSync("./LhannaMedia/theme/cheemspic.jpg")
global.thumb = fs.readFileSync("./LhannaMedia/theme/cheemspic.jpg")

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Concluído✓',
    admin: 'This feature is only for admins!',
    botAdmin: 'Este recurso é apenas para administradores!',
    owner: 'Este recurso é apenas para o proprietário',
    group: 'Este recurso é apenas para grupos!',
    private: 'Este recurso é apenas para bate-papos privados!',
    bot: 'Este recurso é apenas para bot',
    wait: 'Em processo...',
    linkm: 'Onde está o link?',
    error: 'Erro!',
    ban: 'Você foi banido pelo dono, se quiser ser desbanido, dono do chat.',
    nsfw: 'O recurso nsfw não foi ativado, entre em contato com o administrador para ativar',
    banChat: 'O bot foi banido neste grupo, entre em contato com o dono para desbanir'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
