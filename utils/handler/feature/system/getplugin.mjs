import { readdirSync, readFileSync } from 'node:fs';
import cp, { exec as _exec } from 'node:child_process';
import { promisify } from 'node:util';
import { normalize } from "path"
let exc = promisify(_exec).bind(cp);

const handle = async (m, { q, conn, db, repl }) => {
	if (!m.isDev) return conn.sendteks(m.chat, q.owner, m);
	if (!m.args[0]) return conn.sendteks(m.chat, `Salah!!!\nContoh : *.${m.command} bcgc*`, m)
	let cmd = db.cmd[m.args[0]]
	if (!cmd) return repl(`Plugin yang ingin anda ambil tidak ada`)
	let plugin = await exc(`cat ${normalize(cmd.path)}`);
	if (plugin.stderr) return repl(plugin.stderr);
	repl(plugin.stdout)
};

export default handle;

export let cmd = {
	command: "getplugin",
	alias: ["gp"],
	catogory: "#system",
	description: "",
}
