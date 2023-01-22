import { format, inspect } from 'util';
import axios from 'axios';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import got from 'got';

const handle = async(m, { up, conn, q, d, grup, findAdmin, bb, budy, meta, members, admins, isAdmin, isBotAdmin, bot, mime, quoted, quotry, cache, db, find }) => {
	if (!m.isDev) return repl("perintah khusus developer");
let i = db.users.findIndex(v => v[0] == m.sender)
	try {
		let evaling = await eval(!m.query ? Innalillahi_wainna_lillahi_rojiun:m.query)
		conn.sendteks(m.chat, typeof evaling != 'string' ? inspect(evaling) : format(evaling), m)
	} catch(e) {
		conn.sendteks(m.chat, await format(e) + '\n\n*Anda Sepertinya Harus banyak belajar bangg*\n*Jangan Asal tempel code*', d.f1(e, ''))
	}
};

export default handle;

export let cmd = {
	command: "ev",
	alias: [],
	catogory: "#system",
	description: "",
}
