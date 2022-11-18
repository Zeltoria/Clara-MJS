const handle = async(m, { conn, q }) => {
	if (!m.quoted && !m.query) return conn.sendteks(m.chat, `Salah command!!!\nContoh : *.addlist jb-store@Mobile legends@Ini adalah store mobile legends,* Sambil mereply isian list nya`, m)
	let [st, nameList, desc] = m.query.split('@')
	if (!st) return conn.sendteks(m.chat, `Salah command!!!\nContoh : *.addlist jb-store@Mobile legends@Ini adalah store mobile legends,* Sambil mereply isian list nya`, m);
	if (!nameList) return conn.sendteks(m.chat, `Salah command!!!\nContoh : *.addlist jb-store@Mobile legends@Ini adalah store mobile legends,* Sambil mereply isian List nya`, m);
	let store = {
		k: st.toLowerCase(),
		b: st.toUpperCase(),
	}
	let db = conn.db.data.store
	if (!db[store.k] && !db[store.b]) return conn.sendteks(m.chat, `Store yang anda ingin add listnya tidak ada\nAdd store dengan perintah .cs *nama store*\nAtau cari Nama store di bot ini dengan perintah .liststore`, m);
	if (!db[store.b].creator.includes(m.sender)) return conn.sendteks(m.chat, `Maaf!!!\n\nAnda siapa?\nanda bukan owner dari store ini!!!`, m);
	conn.db.data.store[store.k][nameList.toLowerCase()] = {}
	conn.db.data.store[store.k][nameList.toLowerCase()].des = desc
	conn.db.data.store[store.k][nameList.toLowerCase()].isi = m.quoted.text
	conn.db.data.store[store.b].update = new Date()*1
	conn.sendteks(m.chat, `Sukses add list ke store ${store} dengan Nama list ${nameList}\n${desc ? `Dengan Deskripsi : ${desc}` : ''}`, m);
}

export default handle;