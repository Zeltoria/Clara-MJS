import { susunkata } from '@bochilteam/scraper';

const handle = async (m, { conn, q, d, bb }) => {
	conn.susunkata =  conn.susunkata ? conn.susunkata : {}
	let i = m.chat
	if (i in conn.susunkata) return conn.sendteks(i, 'Masih ada game di sini!!!\nMohon tunggu selesai...',m);
	let res = await susunkata().then(v=> v)
	let soal = res.soal
	let jawaban = res.jawaban
	let type = res.tipe
	console.log(soal + '\n\n' + jawaban);
	let teks = `*Game Susun kata*\n\nSilahkan susun kata berikut:\n${soal}\nKategori : ${type}\n\nWaktu: ${q.timeoutgame/1000} detik\n`
	let teks2 = `Waktu berakhir :(\n\nJawaban dari soal :\n\n${bb(soal)}\n\nAdalah : ${bb(jawaban)}`
	conn.susunkata[i] = [
		await conn.sendteks(i, teks, m),
		soal,
		jawaban.toLowerCase(),
		setTimeout(function() {
			if (conn.susunkata[i]) conn.sendteks(i, teks2, m);
			delete conn.susunkata[i];
		}, q.timeoutgame)
	]
}

export default handle;