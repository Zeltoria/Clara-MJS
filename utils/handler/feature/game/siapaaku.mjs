import { siapakahaku } from '@bochilteam/scraper';

const handle = async (m, { conn, q, d, bb }) => {
	conn.siapakahaku =  conn.siapakahaku ? conn.siapakahaku : {}
	let i = m.chat
	if (i in conn.siapakahaku) return conn.sendteks(i, 'Masih ada game di sini!!!\nMohon tunggu selesai...',m);
	let res = await siapakahaku().then(v=> v)
	let soal = res.soal
	let jawaban = res.jawaban
	console.log(soal + '\n\n' + jawaban);
	let teks = `*Game Tebak siapakah aku*\n\nSilahkan jawab soal ini:\n${soal}\nWaktu: ${q.timeoutgame/1000} detik\n`
	let teks2 = `Waktu berakhir :(\n\nJawaban dari soal :\n\n${bb(soal)}\n\nAdalah : ${bb(jawaban)}`
	conn.siapakahaku[i] = [
		await conn.sendteks(i, teks, m),
		soal,
		jawaban.toLowerCase(),
		setTimeout(function() {
			if (conn.siapakahaku[i]) conn.sendteks(i, teks2, m);
			delete conn.siapakahaku[i];
		}, q.timeoutgame)
	]
}

export default handle;