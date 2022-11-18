import simi from 'similarity';
let sensitive = 0.75
const handle = async (m, { q, conn, bb, budy }) => {
	let i = m.chat
	conn.kata = conn.kata ? conn.kata : {}
	if (i in conn.kata) {
		if (simi(conn.kata[i][2], budy.toLowerCase()) >= sensitive) {
			conn.sendteks(i, `Jawaban benarr!!!\n\nSoalan:\n${bb(conn.kata[i][1])}\nJawaban : ${conn.kata[i][2]}`, m)
			clearTimeout(conn.kata[i][3])
			delete conn.kata[i]
		}
	}
}

export default handle;