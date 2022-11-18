import { readdirSync, readFileSync } from 'node:fs';
import cp, { exec as _exec } from 'node:child_process';
import { promisify } from 'node:util';
let cache = new Map();
let path = './utils/handler/feature/';
let exc = promisify(_exec).bind(cp);
let file = JSON.parse(readFileSync(path+"listcmd.json"))
const handle = async (m, { q, conn }) => {
	if (!m.isOwn) return conn.sendteks(m.chat, q.owner, m);
	let allPluginName = await readdirSync(path);
	if (!m.query) return conn.sendteks(m.chat, `Mau cari plugin apa??\n\n${q.a6}\n\n${file.map(v=>v[1]).join('\n')}`, m);
	if (!cache.has(m.query)) {
		let plugin = await exc(`cat utils/handler/feature/${m.query}.mjs`);
		if (plugin.stderr) return conn.sendteks(m.chat, plugin.stderr, m);
			await cache.set(m.query, plugin.stdout);
			conn.sendteks(m.chat, plugin.stdout, m)
	} else if (cache.has(m.query)) {
		conn.sendteks(m.chat, await cache.get(m.query), m)
	}
};

export default handle;