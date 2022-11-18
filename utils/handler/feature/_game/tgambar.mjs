import simi from 'similarity';
let sensitive = 0.75
const handle = async (m, { q, conn, bb, budy }) => {
	let i = m.chat
	conn.gambare = conn.gambare ? conn.gambare : {}
	if (i in conn.gambare) {
		if (simi(conn.gambare[i][1], budy.toLowerCase()) >= sensitive) {
			conn.sendteks(i, `Jawaban benarr!!!\n\nJawaban : ${conn.gambare[i][1]}`, m)
			clearTimeout(conn.gambare[i][2])
			delete conn.gambare[i]
		}
	}
}

export default handle;