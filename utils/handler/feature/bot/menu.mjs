const handle = async (m, { q, conn, d, bb, bot, more, db }) => {
	let cmd = Object.values(db.cmd)
	let teks = `Daftat menus\n\n`
		+ cmd.map(({ category}) => category).reduce((v, i) => v.includes(i) ? v : [...v, i], [])
		.map(c => `--Menu ${c.split('#')[1]}--\n${cmd.filter(({category}) => category == c).map(({ first }) => `--> ${m.preff + first}`).join('\n')}`).join('\n\n')
		conn.sendteks(m.chat, teks, m)
}

export default handle;

export let cmd = {
	command: "menu",
	alias: ["help"],
	catogory: "#bot",
	description: "",
}
