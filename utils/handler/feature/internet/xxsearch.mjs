import got from 'got';

const handle = async (m, { q, conn, repl }) => {
	let [qu, n] = m.query.split('|')
	await repl(q.wait);
	if (n == "deal") {
		let data = await got(`https://malesin.xyz/xnxxdl?url=${qu}`).json()
		if (data.status !== 200) return repl(`Maap kesalahan pada internal server\nStatus code ${data.status}`)
		let vide = data.result?.files?.high || data.result?.files?.HLS || data.result?.files?.low
		let teks = `DOWNLOADER\n\nJudul: ${data.result?.title??'tidak diketahui'}\nDesc: ${data.result?.info??'Tidak diketahui'}\nDurasi: ${data.result?.duration??'99999 Detik'}\nUrl: ${data.result?.files?.HLS ? `\n         Versi HLS: ${data.result?.files?.HLS}\n` : ''}${data.result?.files?.high ? `\n         Versi High: ${data.result?.files?.high}\n` : ''}${data.result?.files?.low ? `\n         Versi Low: ${data.result?.files?.low}\n` : ''}\nRunggu sebentar sedang mengirim video dalam versi tinggi...`
		await conn.sendimg(m.chat, data.result?.image, teks, m)
		//conn.sendMessage(m.chat, { video: { url: vide }, caption: `Ngocok nya jan sampe ketahuan yaa bang, hati hatii...\nowner tau apa yg anda lakukan...`}, { quoted: m })
	} else {
		let data = await got("https://malesin.xyz/xnxxsearch?q="+encodeURIComponent(qu)).json()
		let list = data.result.length > 0 ? data.result.map(({ title, info, link }) => [title, `.${m.command} ${link}|deal`, info]) : [[`Wallpaper search by: ${q.name}`, '', '']];
		conn.sendlist(m.chat, `XNXX SEARCH\n\nTotal ${data.result.length} bokep dari query/kata kunci : ${qu}`, `dosa tanggung sendiri`, list, m);
	}
};

export default handle;

export let cmd = {
	command: "xxs",
	alias: [],
	catogory: "#internet",
	description: "",
}
