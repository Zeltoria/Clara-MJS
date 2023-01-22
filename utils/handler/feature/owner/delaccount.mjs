const handle = async (m, { q, conn, db, repl, find }) => {
	if (!m.isOwn) return repl(q.owner);
	let i = find.users(m.query.replace(/[^0-9]/g, '')+'@s.whatsapp.net')
	if (!db.users[i][1].daftar) return repl('Dia tidak mendaftar game rpg')
	db.users[i][1].daftar = false
	db.users[i].pop()
	repl('sukses mendelete akun tersebut!')
}

export default handle;

export let cmd = {
	command: "delaccount",
	alias: [],
	catogory: "#owner",
	description: "",
}
