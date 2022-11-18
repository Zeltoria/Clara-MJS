const handle = async(m, { conn, q }) => {
	let [st, nameList] = m.query.split('@')
	if (!st) return conn.sendteks(m.chat, `Salah command!!!\nContoh : *.dellist jb-store@Mobile legends`, m);
	if (!nameList) return conn.sendteks(m.chat, `Salah command!!!\nContoh : *.dellist jb-store@Mobile legends`, m);
	let store = {
		k: st.toLowerCase(),
		b: st.toUpperCase(),
	}
	let db = conn.db.data.store
	if (!db[store.k] && !db[store.b]) return conn.sendteks(m.chat, `Store yang anda ingin delete listnya tidak ada\nAdd store dengan perintah .cs *nama store*\nAtau cari Nama store di bot ini dengan perintah .liststore`, m);
	if (!db[store.b].creator.includes(m.sender)) return conn.sendteks(m.chat, `Maaf!!!\n\nAnda siapa?\nanda bukan owner dari store ini!!!`, m);
	if (!db[store.k][nameList.toLowerCase()]) return conn.sendteks(m.chat, `List yang anda ingin delete di store ${store.b} Tidak ada\nCek list store dengan mengetikan namanya\ncontoh : .drian-store`, m);
	delete conn.db.data.store[store.k][nameList.toLowerCase()]
	conn.db.data.store[store.b].update = new Date()*1
	conn.sendteks(m.chat, `Sukses delete list ${nameList} dari store ${store}`, m);
}

export default handle;