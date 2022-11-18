import fs from 'fs';

const json = JSON.parse(fs.readFileSync('./utils/handler/feature/listcmd.json'));

const handle = async (m, { q, conn, d, bb, getpp, more }) => {
	const getmenu = (nama, ciri, db) => {
		let teks = '\n'+q.sub(nama)+'\n'
		teks += db.filter(i=>i[1].startsWith(ciri)).map(v=> q.cmd(bb(m.preff+v[0]))).join('\n')
		teks += more
		return teks
	}
	let teks = q.tit('DAFTAR MENU')+'\n\n'
		teks += getmenu('BOT', 'bot', json)
		teks += getmenu('FUN', 'fun', json)
		teks += getmenu('GAME', 'game', json)
		teks += getmenu('GROUP', 'group', json)
		teks += getmenu('CONVERT', 'convert', json)
		teks += getmenu('INTERNET', 'internet', json)
		teks += getmenu('DATABASE', 'database', json)

		teks += getmenu('OWNER', 'owner', json)
	conn.sendteks(m.chat, teks, d.f1('Simple menu :v',''), d.f2('Github:me',await getpp(m.sender), q.home))
}

export default handle;