const handle = async (m, { q, conn, repl, db }) => {
	let alasan = m.query ? m.query : ' Tanpa Alasan ';
	let i = db.users.findIndex(v=> v[0] == m.sender)
	db.users[i][1].lastafk = Date.now();
	db.users[i][1].reason = alasan
	repl(`Kamu Telah afk dengan alasan ${alasan}`);
};

export default handle;

export let cmd = {
	command: "afk",
	alias: ["off"],
	catogory: "#bot",
	description: "",
}
