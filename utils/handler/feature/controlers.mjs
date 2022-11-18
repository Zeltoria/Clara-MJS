import fs from 'fs';
import simi from 'similarity'; //Matikan jika kamu gk perlu kemiripan commands
import { format } from 'util';
let path = './utils/handler/feature/'
let cmdd = JSON.parse(fs.readFileSync(path+"listcmd.json"))
export default async (m, extra) => {
	let { q, d, bb, bot, conn, isblock, up, isAdmin, isBotAd } = extra
	/* Aku dapet dari : https://stackoverflow.com/questions/36367532/how-can-i-conditionally-import-an-es6-module */
	const er = async (err) => {
		q.developer.map(async v=> {
			await q.delay(3000)
			conn.sendteks(v+q.idwa, `Command : /${m.command}\nOleh : @${m.sender.split('@')[0]}\n\n${bb(format(err))}`, d.f1(err, ''), {mentions: [m.sender]})
		})
	}
	let cate = fs.readdirSync(path)
	for (let b of cate.filter(_=>_.startsWith('_') && !_.endsWith('.mjs') && !_.endsWith('.json'))) {
		let file = fs.readdirSync(path+b)
		for (let u of file) if (m.message) (await import('./'+b+'/'+u)).default(m, extra).catch(e=>console.log(e));
	}
	for (let u of cmdd) if (simi(u[0], m.command) >= q.sensitive) (await import('./'+u[1]+'.mjs')).default(m, extra).catch(e=>er(e));
};
