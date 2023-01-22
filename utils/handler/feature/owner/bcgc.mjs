import { translate } from '@vitalets/google-translate-api';

const handle = async (m, { q, d, conn, repl, more, quoted, mime }) => {
	if (!m.isOwn) return repl(q.owner)
	if (!m.query) return repl('berikan teks nya')
	let all = Object.keys(await conn.groupFetchAllParticipating());
	let from = m.sender
	conn.sendteks(m.chat, `Sedang mengirim Broadcast ke grup ${all.length} selama ${q.longbc*all.length/1000} detik`, m)
	let inggris = await translate(m.query.replace('\n', ' '), {to: 'en' })
	let jawa = await translate(m.query.replace('\n', ' '), {to: 'jw' })
	let teks = '```--:--BROADCAST ADMIN--:--```\n\n'
					+ '*Indonesian:* ' + '\n'
					+ m.query + '\n\n'
					+ '*English:* ' + '\n'
					+ inggris.raw?.sentences[0]?.trans + '\n\n'
					+ '*Jawa* ' + '\n'
					+ jawa.raw?.sentences[0]?.trans + '\n'
					+ more + '\n'
					+ new Date().toLocaleString() + '\n'
					+ `Oleh: @${from.split('@')[0]}`
		for (let i of all) {
			await q.delay(q.longbc)
			await conn.sendteks(i, teks, d.f1('Broadcast Group', ''), {mentions: [from]})
	  }
	conn.sendteks(m.chat, q.sukses, m)
};

export default handle;

export let cmd = {
	command: "bcgroup",
	alias: ["bcgc"],
	catogory: "#owner",
	description: "",
}
