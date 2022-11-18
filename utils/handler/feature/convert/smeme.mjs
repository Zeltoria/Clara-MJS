import { toUrl, toJpg, imgToStiker } from '../../../util/convert-media.js';
let baseUrl = 'https://api.memegen.link/images/custom/'

const handle = async (m, { q, conn, mime, quoted }) => {
	let [atas, bawah] = m.query.split(',')
	if (!/(webp|image)/.test(mime)) return conn.sendteks(m.chat, `Balas stiker dengan teks *.${m.command} teks kesatu , teks kedua*\nAtau Balas gambar / kirim gambar dengan caption *.${m.command} teks kesatu , teks kedua*`, m);
	let dl = await quoted.download()
	let name = {name: 'stiker ballbot', author: 'by bolaxd'}
	if (!bawah) {
		if (/webp/.test(mime)) {
			let result = `${baseUrl}${encodeURIComponent('')}/${encodeURIComponent(atas)}.png?background=${await toUrl((await toJpg(dl)))}`
			conn.sendstik(m.chat, await imgToStiker((await q.getbuff(result)), name), m);
		} else if (/image/.test(mime)) {
			let result = `${baseUrl}${encodeURIComponent('')}/${encodeURIComponent(atas)}.png?background=${await toUrl(dl)}`
			conn.sendstik(m.chat, await imgToStiker((await q.getbuff(result)), name), m);
		}
	} else if (atas && bawah) {
		if (/webp/.test(mime)) {
			let result = `${baseUrl}${encodeURIComponent(atas)}/${encodeURIComponent(atas)}.png?background=${await toUrl(await toJpg(dl))}`
			conn.sendstik(m.chat, await imgToStiker(await q.getbuff(result), name), m);
		} else if (/image/.test(mime)) {
			let result = `${baseUrl}${encodeURIComponent(atas)}/${encodeURIComponent(atas)}.png?background=${await toUrl(dl)}`
			conn.sendstik(m.chat, await imgToStiker(await q.getbuff(result), name), m);
		}
	} else conn.sendteks(m.chat, `Balas stiker dengan teks *.${m.command} teks kesatu , teks kedua*\nAtau Balas gambar / kirim gambar dengan caption *.${m.command} teks kesatu , teks kedua*`, m)
}

export default handle;