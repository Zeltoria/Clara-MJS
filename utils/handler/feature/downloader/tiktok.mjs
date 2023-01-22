import got from 'got';

const handle = async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan url nya contoh : .${m.command} https://vt.tiktok.com/blablaaa mp3`);
    if (!m.args[1]) return repl(`Masukan type downloader nya, contoh : .${m.command} https://vt.tiktok.com/blablaaa mp4`);
    await repl('Wait sekk...');
    const data = await got(`${q.api}tiktok?url=${m.args[0]}&apikey=${q.key}`).json()
    let vid = data.video ? data.video : 'Sorry WEB nya terjadi kesalahan internal'
    let aud = data.audio ? data.audio : 'Sorry WEB nya terjadi kesalahan internal'
    if (m.args[1] == 'mp4') return /*conn.sendvid(m.chat, vid, `Judul: ${data.title}\nDesc: ${data.desc}`, m)*/conn.sendteks(m.chat, `Judul: ${data.title}\nDesc: ${data.desc}\nURL Downloader : ${vid}\n\n1. Silahkan klik urlnya\n2. Masuk melalui chrome/ browser anda\n3. Video otomatis terdownload`, d.f1(`Downloader hemat data`,''))
    if (m.args[1] == 'mp3') return /*conn.sendaud(m.chat, aud, d.f1(`Judul: ${data.title} | Desc: ${data.desc}`, ''))*/ conn.sendteks(m.chat, `Nihh Mp3 nya...\nTapi dalam bentuk URL\n\nJudul: ${data.title}\nDesc: ${data.desc}\nURL Downloader: ${aud}\n\n1. Silahkan klik urlnya\n2. Masuk melalui chrome/ browser anda\n3. Audio otomatis terdownload`, d.f1(`Downloader hemat data`, ''))
}

export default handle;

export let cmd = {
	command: "tiktokdl",
	alias: ["tt", "ttdl"],
	catogory: "#downloader",
	description: "",
}
