const handle = async (m, { q, conn, repl }) => {
	conn.petakbom = conn.petakbom ?? {}
	let i = m.sender
	if (i in conn.petakbom) {
		await repl(`Game mu masih belum terselesaikan, lanjutkan yukk`);
		let brd = conn.petakbom[i].board
		return repl(`PETAK BOM\n\n${brd.join('')}`)
	}
	conn.petakbom[i] = {
		petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
		board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
		pick: 0,
	}
	let brd = conn.petakbom[i].board
	await repl(`PETAK BOM\n\n${brd.join('')}\n\nPilih lah nomor tersebut!\nJangan sampe terkena bomb`)
}

export default handle;

export let cmd = {
	command: "petakbom",
	alias: [],
	catogory: "#game",
	description: "",
}

function shuffle(array) {
	return array.sort(() => Math.random() - 0.5)
}
