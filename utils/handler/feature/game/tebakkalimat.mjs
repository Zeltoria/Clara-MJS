import got from 'got';

const handle = async (m, { conn, q, d, bb }) => {
	conn.kalimat =  conn.kalimat ? conn.kalimat : {}
	let i = m.chat
	if (i in conn.kalimat) return conn.sendteks(i, 'Masih ada game di sini!!!\nMohon tunggu selesai...',m);
	let res = q.rdm(await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json').json())
	let soal = res.soal
	let jawaban = res.jawaban
	console.log(soal + '\n\n' + jawaban);
	let teks = `*Game Tebak kalimat*\n\nSilahkan jawab soal ini:\n${soal}\nWaktu: ${q.timeoutgame/1000} detik\n`
	let teks2 = `Waktu berakhir :(\nJawaban dari soal :\n\n${bb(soal)}\n\nAdalah : ${bb(jawaban)}`
	conn.kalimat[i] = [
		await conn.sendteks(i, teks, m),
		soal,
		jawaban.toLowerCase(),
		setTimeout(function() {
			if (conn.kalimat[i]) conn.sendteks(i, teks2, m);
			delete conn.kalimat[i];
		}, q.timeoutgame)
	]
}

export default handle;