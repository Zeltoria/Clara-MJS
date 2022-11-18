import simi from 'similarity';
let sensitive = 0.75
const handle = async (m, { q, conn, bb, budy }) => {
	let i = m.chat
	conn.caklontong = conn.caklontong ? conn.caklontong : {}
	if (i in conn.caklontong) {
		if (simi(conn.caklontong[i][2], budy.toLowerCase()) >= sensitive) {
			conn.sendteks(i, `Jawaban benarr!!!\n\nSoalan:\n${bb(conn.caklontong[i][1])}\nJawaban : ${conn.caklontong[i][2]}`, m)
			clearTimeout(conn.caklontong[i][3])
			delete conn.caklontong[i]
		}
	}
}

export default handle;