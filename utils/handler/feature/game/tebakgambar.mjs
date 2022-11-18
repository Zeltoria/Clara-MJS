import { tebakgambar } from '@bochilteam/scraper';

const handle = async (m, { q, conn, d }) => {
	let res = await tebakgambar().then(v=>v)
	let desc = res.deskripsi
	let jwbn = res.jawaban
	let i = m.chat
	conn.gambare = conn.gambare ? conn.gambare : {}
	if (i in conn.gambare) return conn.sendteks(i, 'Masih ada game trbak gambar yang belom selesai...', m);
	conn.gambare[i] = [
			await conn.sendteks(i,`Gambar tersebut terdapat ${desc}\n\nWaktu ${q.timeoutgame/1000} detik`, m, d.f2('',res.img,'')),
			jwbn.toLowerCase(),
			setTimeout(async function() {
				if (i in conn.gambare) {
					await conn.sendteks(i, `Waktu habis :)\nJawaban nya adalah : ${conn.gambare[i][1]}`, m);
					delete conn.gambare[i];
				}
			}, q.timeoutgame+20000)
		]
}

export default handle;