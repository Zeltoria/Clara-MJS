import { writeFileSync } from 'fs';

const handle = async (m, { q, conn }) => {
	if (!m.isOwn) return conn.sendteks(m.chat, q.owner, m)
	if (!m.quoted) return conn.sendteks(m.chat, `Mau simpan plugin apa? reply teks script nya bang`, m)
	if (!m.query) return conn.sendteks(m.chat, `Salah!!!\nContoh : *.${m.command} owner/bcgc*`, m)
	let path = './utils/handler/feature/'
	await writeFileSync(path+m.query+'.mjs', m.quoted.text)
	conn.sendteks(m.chat, `Sukses tersave di path : ${path + m.query}`, m)
}

export default handle;