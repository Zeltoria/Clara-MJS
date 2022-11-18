import simi from 'similarity';
let sensitive = 0.75
const handle = async (m, { q, conn, bb, budy }) => {
	let i = m.chat
	conn.bendera = conn.bendera ? conn.bendera : {}
	if (i in conn.bendera) {
		if (simi(conn.bendera[i][1], budy.toLowerCase()) >= sensitive) {
			conn.sendteks(i, `Jawaban benarr!!!\n\nJawaban : ${conn.bendera[i][1]}`, m)
			clearTimeout(conn.bendera[i][2])
			delete conn.bendera[i]
		}
	}
}

export default handle;