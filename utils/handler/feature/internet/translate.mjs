import { translate } from '@vitalets/google-translate-api';

const handle = async (m, { q, conn }) => {
	let [ teks, bhs ] = m.query.split('|')
	if (!teks) return conn.sendteks(m.chat, `masukan teksnya!\nContoh .${m.command} halo dunia | en`, m);
	let b = bhs ? bhs.replace(' ', '') : 'auto'
	let res = await translate(teks, {to: b})
conn.sendteks(m.chat, `Terjemahan : ${res.raw.sentences[0]?.trans}\nCara baca : ${res.raw.sentences[1]?.translit ? res.raw.sentences[1]?.translit : "tidak diketahui"}`, m);
}

export default handle;