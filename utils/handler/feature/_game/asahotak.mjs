import simi from 'similarity';
let sensitive = 0.75
const handle = async (m, { q, conn, bb, budy }) => {
	let i = m.chat
	// GAME ASAH NGOTAK
	conn.ngotak = conn.ngotak ? conn.ngotak : {}
	if (i in conn.ngotak) {
		if (simi(conn.ngotak[i][2], budy.toLowerCase()) >= sensitive) {
			conn.sendteks(i, `Jawaban benarr!!!\n\nSoalan:\n${bb(conn.ngotak[i][1])}\nJawaban : ${conn.ngotak[i][2]}`, m)
			clearTimeout(conn.ngotak[i][3])
			delete conn.ngotak[i]
		}
	}
}

export default handle;