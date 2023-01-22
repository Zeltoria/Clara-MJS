const handle = async (m, { q, conn, db, repl, find }) => {
	let { u, users } = find
	let send = m.sender
	if (send in conn.messu) {
		let f = users(m.msg.contextInfo?.mentionedJid[0]);
		if (f === -1) return repl('Dia tidak terdaftar di database!');
		if (!db.users[f][1].daftar) return repl('Dia tidak mendaftar game rpg!');
		let jam = [1,0,0,2,0,5,0,7,0,4,0].rendem();
		if (jam === 0) {
			delete conn.messu[send]
			return repl('Eh melesett, bubuk nya gk kena dia...');
			}
		db.users[f][2].lastmessu = (Date.now() + (jam * 60 * 60 * 1000))
		repl(`Kamu menaburkan bubuk messu kedia dia kena racun!\nDia tidak bisa mencuri selama ${jam} jam`);
			delete conn.messu[send]
	}
}

export default handle;
