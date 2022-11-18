const handle = async(m, { conn, q }) => {
	if (!m.query) return conn.sendteks(m.chat, `Masukan Nama store yang ingin anda gunakan!!!`, m);
	let store = {
		k: m.query.toLowerCase(),
		b: m.query.toUpperCase(),
	}
	conn.db.data.store[store.k] = {}
	conn.db.data.store[store.b] = {}
	conn.db.data.store[store.b].creator = [m.sender]
	conn.db.data.store[store.b].date = new Date()*1
	conn.db.data.store[store.b].update = new Date()*1
	conn.sendteks(m.chat, `Sukses membuat Nama store dengan nama ${m.query} Silahkan anda memanggil store dengan nama store nya\nContoh : .drian-store`, m)
};

export default handle;