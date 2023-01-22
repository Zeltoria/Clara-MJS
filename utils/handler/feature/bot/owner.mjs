const handle = async (m, { q, conn }) => {
	let kontak = [
		['Iqbal', q.developer[0], '' ],
		['hmm', q.developer[1], '' ],
		];
	await conn.sendkon(m.chat, q.name, kontak, m)
	.catch(v => conn.sendteks(m.chat, q.gagal, m));
}

export default handle;

export let cmd = {
	command: "owner",
	alias: ["creator"],
	catogory: "#bot",
	description: "",
}
