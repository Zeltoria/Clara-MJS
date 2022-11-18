const handle = async (m, { q, conn }) => {
	if (!m.args[0]) return
	await conn.sendteks(m.chat, q.wait, m)
	let hitung = 0
	for (let u of m.args) {
		await q.delay(3000)
		hitung++
		await conn.sendimg(m.chat, u, `Gambar ke ${hitung}`, m);
	}
}

export default handle;