import fetch from "node-fetch";
import cheerio from "cheerio";

const handle = async (m, { q, conn, repl }) => {
	let [ i, b] = m.query.split('@')
	if (b) {
		let res = await laguBaratGet(b)
		repl(res)
	} else {
		if (!i) return repl('Masukan Query nya!');
		let res = await laguBaratSearch(i)
		let list = res.map(v => [v.title, `.${m.command} ${i}@${v.urlHtml}`, `Category: ${v.label} | search cepat: ${v.snippet}`])
if (res.length < 1) list.push(['tidak ditemukan','',''])
		conn.sendlist(m.chat, `Terdapat result ${res.length} dari hasil pencarian ${i}`, q.name, list, m)
	}
}

export default handle;

export let cmd = {
	command: "lagubarat",
	alias: [],
	catogory: "#internet",
	description: "",
}
// by bolaxd
// https://www.lirikterjemahan.id/search?q=

function laguBaratSearch(query, page = 1) {
   return new Promise(async (resolve, reject) => {
      await fetch(`https://www.lirikterjemahan.id/search?q=${query.replace(/ /gi,"+")}&m=${page}`, {
            method: "GET",
         }).then((v) => v.text())
         .then((o) => {
            const X = cheerio.load(o);
            const H = [];
            X(".blog-posts > article").map((b, i) => {
               const Z = X(i);
               const title = Z.find(".post-title > a").text();
               const urlHtml = Z.find(".post-title > a").attr("href");
               const label = Z.find(".post-label").text();
               const snippet = Z.find(".post-snippet").text()
               H.push({
               	title,
               	urlHtml,
               	label,
               	snippet
               })
            });
            resolve(H)
         })
         .catch(reject);
   });
}

function laguBaratGet(html, page = 1) {
	return new Promise(async (resolve, reject) => {
		await fetch(html, {
			method: "GET"
		}).then(v => v.text())
		.then(o => {
			const kont = cheerio.load(o)
			resolve(kont('.post-body').text())
		})
	})
}
