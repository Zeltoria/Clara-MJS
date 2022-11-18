import { twitterdl,
		twitterdlv2, 
		mediafiredl
	} from '@bochilteam/scraper';
import axios from 'axios';
import { format } from 'util';
import { ytv, yta } from '../../../util/downloader.js';

const handle = async (m, { q, d, conn, bb }) => {
		if (m.args[0] == 'download2345') {
			await conn.sendteks(m.chat, bb(q.wait), m)
			if (/vid/.test(m.args[1])) {
				try {
					conn.sendvid(m.chat, m.args[2], q.sukses, m)
				} catch (e) { conn.sendteks(m.chat, `Terjadi error saat ambil buffer :v\nSilahkan download sendiri melalui link ini\n${m.args[2]}`)}
			} else if (/music/.test(m.args[1])) {
				try {
					conn.sendaud(m.chat, m.args[2], m)
				} catch (e) { conn.sendteks(m.chat, `Terjadi error saat ambil buffer :v\nSilahkan download sendiri melalui link ini\n${m.args[2]}`)}
			} else if (/doc/.test(m.args[1])) {
				try {
					conn.senddoc(m.chat, m.args[4], m.args[3], m.args[2], m)
				} catch (e) { conn.sendteks(m.chat, `Terjadi error saat ambil buffer :v\nSilahkan download sendiri melalui link ini\n${m.args[4]}`)}
			}
		} else
		if (/^.*instagram/i.test(m.args[0])) {
			await conn.sendteks(m.chat, bb('Sedang menginisialisasi link...'), m)
			let res = await snapsave(m.args[0])
			console.log(res)
            conn.sendvid(m.chat, res.url, q.sukses, m)
		} else
		// if (/^.*zippyshare/i.test(m.args[0])) {
		// 	await conn.sendteks(m.chat, q.wait, m)
		// 	let res = await zippyshare(m.args[0])
		// 				.catch(_=> q.gagal)
		// 	throw format(res)
		// } else
		if (/^.*tiktok/i.test(m.args[0])) {
			await conn.sendteks(m.chat, bb('Sedang menginisialisasi link...'), m)
			let {data} = await axios.get(q.api+'tiktok?url='+m.args[0])
			console.log(data)
    let but = [['Video', `.download download2345 vid ${data.video}`], ['Music', `.download download2345 doc audio/mp3 downloader-tiktok-music-by-Mei-botz.mp3 ${data.audio}`]]
    let teks = `${data.status == 200 ? `Sukses mendapatkan link...\nDownloader By : ${data.creator}\nJudul : ${data.title}\nVideo ber WM : ${data.videoWM}` : 'Gagal mendapatkan link, mungkin error...'}`
            conn.butteks(m.chat, teks, q.name, but, m)
		} else
		if (/^.*twitter/i.test(m.args[0])) {
			await conn.sendteks(m.chat, bb('Sedang menginisialisasi link...'), m)
			let res = await twitterdl(m.args[0])
						.catch(async _=> await twitterdlv2(m.args[0]))
			let but = res.map(v=> [`Kualitas: ${v.quality}`, `.download download2345 vid ${v.url}`])
			conn.butteks(m.chat, `Silahkan Pilih Kualitas video nya...`, q.name, but, m)
		} else
		if (/^.*mediafire/i.test(m.args[0])) {
			await conn.sendteks(m.chat, bb('Sedang menginisialisasi link...'), m)
			let res = await mediafiredl(m.args[0])
						.catch(_=> q.gagal)
			let mimes = `${res.filetype}/${res.ext}`.toLowerCase();
			let names = `${res.filename}.${res.ext.toLowerCase()}`
			let but = [[`Download`, `.download download2345 doc ${mimes} ${names} ${res.url}`], [`Cadangan`, `.download download2345 doc ${mimes} ${names} ${res.url2}`]]
			conn.butteks(m.chat, `Nama File: ${res.filename}\nUpload pada: ${res.aploud}\nSize File: ${res.filesizeH}\nKlik button pertama untuk download\nJika gagal anda bisa gunakan button kedua`, q.name, but, m)
		} else
		if (/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/.test(m.args[0])) {
			await conn.sendteks(m.chat, bb('Sedang menginisialisasi link...'), m)
			let res = await ytv(m.args[0])
            let res2 = await yta(m.args[0])
			let but = [['Video', `.download download2345 vid ${res.dl_link}`], 
['Audio', `.download download2345 doc audio/mp3 downloader-youtube-by-Mei-botz.mp3 ${res2.dl_link}`]]
			conn.butteks(m.chat, `Berhasil mendapatkan url!!!\nSilahkan Pilih tipe nya`, q.name, but, m)
		} else conn.sendteks(m.chat, 'Url hang anda masukan tidak sesuai yang tersedia disini\nDownloader terdaftar:\ninstagram\ntiktok\ntwitter\nmediafire\nyoutube\nJika url yang anda request tidak tersedia disini mintalah request ke owner', m)
};

export default handle;