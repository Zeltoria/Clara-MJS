const handle = async (m, { q, conn, repl }) => {
	conn.petakbom = conn.petakbom ?? {}
	let i = m.sender
	let pilih = '🌀'
	let bomb = '💣'
	if (i in conn.petakbom) {
		if (!/^[1-9]|10$/i.test(m.text)) return !0
		if (conn.petakbom[i].petak[parseInt(m.text) -1] === 1) return !0
		if (conn.petakbom[i].petak[parseInt(m.text) -1] === 2) {
			conn.petakbom[i].board[parseInt(m.text) -1] = bomb
			conn.petakbom[i].pick++
			let brd = conn.petakbom[i].board
			await repl(`PETAK BOM\n\n${brd.join('')}\n\nTerpilih: ${conn.petakbom[i].pick}`)
			await repl(`Game telah berakhir...`)
			delete conn.petakbom[i]
			return !0
		}
		if (conn.petakbom[i].petak[parseInt(m.text) -1] === 0) {
			conn.petakbom[i].petak[parseInt(m.text) -1] = 1
			conn.petakbom[i].board[parseInt(m.text) -1] = pilih
			conn.petakbom[i].pick++
			let brd = conn.petakbom[i].board
			repl(`PETAK BOM\n\n${brd.join('')}\n\nTerpilih: ${conn.petakbom[i].pick}`)
		}
	}
}

export default handle;
