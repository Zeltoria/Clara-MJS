const handle = async (m, { q, conn, db, repl, bot, find }) => {
	let { u } = find
	if (db.users[u][1].daftar) return repl('Anda telah mendaftarkan Nomor anda!');
	let rules = `Rules Bermain!
+> Tidak diperkenankan memerintah bot dalam jarak dekat / Spamming
+> Tidak diperkenankan membuat percobaan bug atau semacamnya
+> Tidak diperkenankan membuat aturan sendiri selain owner
+> Dianjurkan saling menghormati 
`
	if (!m.query) return repl('Masukan nama anda!\nPastikan Memilih font nama yang bagus...');
	if (m.query.length < 4) return repl('Invalid nama!\nMinimal 4 karakter')
	if (m.query.length > 25) return repl('Invalid nama!\nMaks 25 karakter')
		// Pertama daftar
	var name = m.query
	var coin = 15000
	var bank = 1000
	var maxbank = 100000
	var level = 1 
	var work = 0 
	var claim = 0 
	var hadiah = 20000
	var maxcredit = 30000
	var lasthit = 0
	var gold = 10
	var silver = 15
	var up = 150 
	var xp = 0 
	var cn = 1
	var steal = 0
	var antisteal = -1
	var antistealjumlah = 0
	var granat = 0
	var granatb = false
	var messu = 0
	var lastjelajah = 0
	var lastmessu = 0
	var beg = 0
	var remindantisteal = false
	db.users[u][1].daftar = true
	db.users[u].push({
		name,
		coin,
		bank,
		gold,
		silver,
		maxbank,
		level,
		work,
		claim,
		hadiah,
		maxcredit,
		lasthit,
		up,
		xp,
		cn,
		steal,
		antisteal,
		antistealjumlah,
		granat,
		granatb,
		messu,
		lastjelajah,
		lastmessu,
		beg,
		remindantisteal,
	});
	repl(
		 `*Terdaftar!*\n\n`
		+`Nama: ${name}\n`
		+`Level: ${level}\n`
		+`Progress: ${xp} XP\n`
		+`Duit: ${coin.rupiah()} Rupe\n`
		+`Perak: ${silver} Batang\n`
		+`Emas: ${gold} Batang\n`
		+`Simpanan: ${bank.rupiah()} Rupe\n`
		+`Kartu Ganti Nama: ${cn}\n`
		+`\n${rules}\nUntuk menu rpg cek di *.menu rpg*`
		)
}

export default handle;

export let cmd = {
	command: "daftar",
	alias: [],
	catogory: "#rpg",
	description: "",
}
