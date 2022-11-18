const handle = async (m, { q, conn }) => {
	let [st, nameList] = m.query.split('@');
	if (!st) return;
	if (!nameList) return;
	let store = {
		k: st.toLowerCase(),
		b: st.toUpperCase(),
	};
	let db = conn.db.data.store;
	if (!db[store.k] && !db[store.b]) return;
	if (!db[store.k][nameList.toLowerCase()]) return conn.sendteks(m.chat, `List itu tidak ada / sudah dihapus oleh owner store ini`, m);
	let but = [['Back To store', `.${store.k}`]];
	conn.butteks(m.chat, conn.db.data.store[store.k][nameList.toLowerCase()].isi, `Owner store :\n${conn.db.data.store[store.b].creator.map(v=>v.split('@')[0]).join('\n')}\nCreated At: ${q.time(new Date()*1 - conn.db.data.store[store.b].date)}`, but, m);
};

export default handle;
// INI STORE UMTUK MEMANGGIL LIST