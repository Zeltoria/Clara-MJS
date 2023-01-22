import { unlinkSync } from "fs";
import path from "path";

const handle = async (m, { q, conn, db, repl }) => {
	if (!m.isDev) return conn.sendteks(m.chat, q.owner, m)
	if (!m.args[0]) return conn.sendteks(m.chat, `Salah!!!\nContoh : *.${m.command} bcgc*`, m)
	let cmd = db.cmd[m.args[0]]
	if (!cmd) return repl(`Plugin yang ingin anda hapus tidak ada`)
	await unlinkSync(path.normalize(cmd.path))
	await conn.sendteks(m.chat, `Sukses delete plugin ${m.args[0]} di path : ${cmd.path}`, m)
	conn.restart(m)
}

export default handle;

export let cmd = {
	command: "delplugin",
	alias: ["dp"],
	catogory: "#system",
	description: "",
}
