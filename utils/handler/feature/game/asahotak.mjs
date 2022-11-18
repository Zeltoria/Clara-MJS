import { asahotak } from '@bochilteam/scraper';

const handle = async (m, { conn, q, d, bb }) => {
	conn.ngotak =  conn.ngotak ? conn.ngotak : {}
	let i = m.chat
	if (i in conn.ngotak) return conn.sendteks(i, 'Masih ada game di sini!!!\nMohon tunggu selesai...',m);
	let res = await asahotak().then(v=> v)
	let soal = res.soal
	let jawaban = res.jawaban
	console.log(soal + '\n\n' + jawaban);
	let teks = `*Game Asah Otak*\n\nSilahkan jawab soal ini:\n${soal}\nWaktu: ${q.timeoutgame/1000} detik\n`
	let teks2 = `Waktu berakhir :(\nJawaban dari soal :\n\n${bb(soal)}\n\nAdalah : ${bb(jawaban)}`
	conn.ngotak[i] = [
		await conn.sendteks(i, teks, m),
		soal,
		jawaban.toLowerCase(),
		setTimeout(function() {
			if (conn.ngotak[i]) conn.sendteks(i, teks2, m);
			delete conn.ngotak[i];
		}, q.timeoutgame)
	]
}

export default handle;