import { tebakbendera } from '@bochilteam/scraper';

const handle = async (m, { q, conn, d }) => {
	let res = await tebakbendera().then(_=>_)
	let jwbn = res.name 
	let i = m.chat
	conn.bendera = conn.bendera ? conn.bendera : {}
	if (i in conn.bendera) return conn.sendteks(i, 'Masih ada game di sini...', m)
	conn.bendera[i] = [
			await conn.sendimg(i, res.img, `Coba tebak bendera ini bendera negara mana?\nWaktu: ${q.timeoutgame/1000} Detik`, m),
			jwbn.toLowerCase(),
			setTimeout(async function() {
				if (i in conn.bendera) {
					await conn.sendteks(i, `Waktu habis :(\nJawaban nya adalah : ${conn.bendera[i][1]}`, m)
					delete conn.bendera[i];
				}
			}, q.timeoutgame)
		]
};

export default handle;