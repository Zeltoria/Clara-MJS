import simi from 'similarity';
let sensitive = 0.75
const handle = async (m, { q, conn, bb, budy }) => {
	let i = m.chat
	conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
	if (i in conn.siapakahaku) {
		if (simi(conn.siapakahaku[i][2], budy.toLowerCase()) >= sensitive) {
			conn.sendteks(i, `Jawaban benarr!!!\n\nSoalan:\n${bb(conn.siapakahaku[i][1])}\nJawaban : ${conn.siapakahaku[i][2]}`, m)
			clearTimeout(conn.siapakahaku[i][3])
			delete conn.siapakahaku[i]
		}
	}
}

export default handle;