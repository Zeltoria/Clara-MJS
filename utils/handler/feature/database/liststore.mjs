const handle = async (m, { q, conn }) => {
	conn.db.data.store = conn.db.data.store ? conn.db.data.store : {};
    let vibe = Object.keys(conn.db.data.store)
	let but = vibe.length >0 ? vibe.filter(v=> v.includes(v.toUpperCase())).map(v=> [v, `.${v.toLowerCase()}`, `Dibuat oleh : ${conn.db.data.store[v.toUpperCase()].creator.map(v=>v.split('@')[0]).join(' - ')}. |  Dibuat pada : ${q.time(new Date()*1 - conn.db.data.store[v.toUpperCase()].date)} yang lalu | Di update pada : ${q.time(new Date()*1 - conn.db.data.store[v.toUpperCase()].update)}`]) : ['Belum ada store yang terdaftar', '', '']
	conn.sendlist(m.chat, `List Store Mei Botz >>_<<`, q.name, but, m);
};

export default handle;