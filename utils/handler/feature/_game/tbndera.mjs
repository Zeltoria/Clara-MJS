import simi from 'similarity';
let sensitive = 0.75
const handle = async (m, { q, conn, bb, budy, repl }) => {
	let i = m.chat
	if (i in conn.bendera) {
		if (simi(conn.bendera[i][1], budy.toLowerCase()) >= sensitive) {
			repl(`Jawaban benarr!!!\n\nJawaban : ${conn.bendera[i][1]}`)
			clearTimeout(conn.bendera[i][2])
			delete conn.bendera[i]
		}
	}
}

export default handle;
