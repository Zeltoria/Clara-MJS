const handle = async (m, { q, conn, bb, d }) => {
	if (!m.isPc) return conn.sendteks(m.chat, `Fitur ini khusus pribadi :v`, m);
	let [ no, name, teks ] = m.query.split('|')
	if (!no) return conn.sendteks(m.chat, `Format salah!!!\nContoh : *.${m.command} 62 878 3906 7186 | sang penjaga | halo bangg gw orang luu*`, m)
	if (!no.startsWith('+62' || '62')) return conn.sendteks(m.chat, `Gunakan lah kode negara \nContoh : *.${m.command} 62 878 3906 7186 | sang penjaga | halo bangg gw orang luu*`, m)
	if (!name) return conn.sendteks(m.chat, `Masukan Namanya!!!\nContoh : *.${m.command} 62 878 3906 7186 | sang penjaga | halo bangg gw orang luu*`, m)
	if (!teks) return conn.sendteks(m.chat, `Masukan Teks nya!!!\nContoh : *.${m.command} 62 878 3906 7186 | sang penjaga | halo bangg gw orang luu*`, m)
	let numberSend = no.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	conn.menfess = conn.menfess ? conn.menfess : {}
	let s = await conn.butteks(numberSend, `*Pesan Menfess*\n\nDari: ${name}\n\nPesan:\n${bb(teks)}`, q.name, [['Balas', '.menfessbalas']], d.f1('Pesan anomymous', ''))
conn.sendteks(m.chat, `Pesan anda telah terkirim ke @${numberSend.split('@')[0]}`, m, {mentions: [numberSend]})
	conn.menfess[s.key.id] = [
		s,
		teks,
		numberSend,
		m.sender,
		false
	]
};

export default handle;