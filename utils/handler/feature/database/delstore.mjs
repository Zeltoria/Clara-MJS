const handle = async(m, { conn, q }) => {
	if (!m.query) return conn.sendteks(m.chat, `Salah command!!!\nContoh : *.delstore jb-store`, m);
	let store = {
		k: m.query.toLowerCase(),
		b: m.query.toUpperCase(),
	};
	let db = conn.db.data.store;
	if (!db[store.k] && !db[store.b]) return conn.sendteks(m.chat, `Store yang anda ingin delete listnya tidak ada\nAdd store dengan perintah .cs *nama store*\nAtau cari Nama store di bot ini dengan perintah .liststore`, m);
	if (!db[store.b].creator.includes(m.sender)) return conn.sendteks(m.chat, `Maaf!!!\n\nAnda siapa?\nanda bukan owner dari store ini!!!`, m);
	delete conn.db.data.store[store.k];
	delete conn.db.data.store[store.b];
	conn.sendteks(m.chat, `Sukses delete store : ${store} dari database bot ini`, m);
};

export default handle;