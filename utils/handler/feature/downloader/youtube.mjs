import { youtubedlv2 } from '@bochilteam/scraper';
import { format } from 'util';
const handle = async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan url nya contoh : .${m.command} https://youtu.be/blabla mp3`);
    if (!m.args[1]) return repl(`Masukan type downloader nya, contoh : .${m.command} https://youtu.be/blabla mp4`);
    await repl('load...')
    const res = await youtubedlv2(m.args[0]);
    let vid = res.video['720p']
    let aud = res.audio['128kbps']
    if (m.args[1] == 'mp4') return /*conn.sendvid(m.chat, await vid.download(), `Judul: ${res.title}\nKualitas: ${vid.quality}\nSize: ${vid.fileSizeH}`, m)*/conn.sendteks(m.chat, `Judul: ${res.title}\nKualitas: ${vid.quality}\nSize: ${vid.fileSizeH}\nURL Downloader : ${await vid.download()}\n\n1. Silahkan klik link downloader nya\n2. Masuk ke browser favorit anda\n3. video otomatis terdownload`, d.f1('Downloader hemat data', ''))
    if (m.args[1] == 'mp3') return /*conn.sendaud(m.chat, await aud.download(), d.f1(`Judul: ${res.title} | Kualitas: ${vid.quality} | Size: ${vid.fileSizeH}`, ''))*/conn.sendteks(m.chat, `Judul: ${res.title}\nKualitas: ${aud.quality}\nSize: ${aud.fileSizeH}\nURL Downloader : ${await aud.download()}\n\n1. Silahkan klik link downloader nya\n2. Masuk ke browser favorit anda\n3. Audio otomatis terdownload`, d.f1('Downloader hemat data', ''))
}

export default handle;

export let cmd = {
	command: "youtubedl",
	alias: ["yt", "ytdl"],
	catogory: "#downloader",
	description: "",
}
