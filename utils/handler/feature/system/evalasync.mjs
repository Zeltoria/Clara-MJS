import { format } from 'util';
import axios from 'axios';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import pretty from 'pretty';
import got from 'got';
import { toUrl } from "../../../util/convert-media.mjs";


const handle = async(m, { q, d, conn, grup, findAdmin, bb, budy, meta, members, admins, isAdmin, isBotAdmin, bot, mime, quoted, quotry, db }) => {
	if (!m.isDev) return repl("perintah khusus developer");
	try {
		let evaling = await eval(`(async () => { return ${m.query ? m.query : innalillahi_wainna_ilaihi_rojiuun } })()`)
		conn.sendteks(m.chat, format(evaling), m)
	} catch(e) {
		conn.sendteks(m.chat, await format(e) + '\n\n*Anda Sepertinya Harus banyak belajar bangg*\n*Jangan Asal tempel code*', d.f1(e, ''))
	}
};

export default handle;

export let cmd = {
	command: "ev2",
	alias: [],
	catogory: "#system",
	description: "",
}
