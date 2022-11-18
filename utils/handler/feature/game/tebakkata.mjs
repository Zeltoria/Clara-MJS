import { tebakkata } from '@bochilteam/scraper';

const handle = async (m, { conn, q, d, bb }) => {
	conn.kata =  conn.kata ? conn.kata : {}
	let i = m.chat
	if (i in conn.kata) return conn.sendteks(i, 'Masih ada game di sini!!!\nMohon tunggu selesai...',m);
	let res = await tebakkata().then(v=> v)
	let soal = res.soal
	let jawaban = res.jawaban
	console.log(soal + '\n\n' + jawaban);
	let teks = `*Game Tebak kata*\n\nSilahkan jawab soal ini:\n${soal}\nWaktu: ${q.timeoutgame/1000} detik\n`
	let teks2 = `Waktu berakhir :(\nJawaban dari soal :\n\n${bb(soal)}\n\nAdalah : ${bb(jawaban)}`
	conn.kata[i] = [
		await conn.sendteks(i, teks, m),
		soal,
		jawaban.toLowerCase(),
		setTimeout(function() {
			if (conn.kata[i]) conn.sendteks(i, teks2, m);
			delete conn.kata[i];
		}, q.timeoutgame)
	]
}

export default handle;