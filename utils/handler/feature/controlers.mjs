import fs from "fs";
import { format } from "util";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Read directory plugin
let rootdir = dirname(fileURLToPath(import.meta.url))
let cates = fs.readdirSync(rootdir, { withFileTypes: true })

export default async (m, extra) => {
	let { q, d, bb, bot, conn, isblock, up, isAdmin, isBotAdmin, repl, db, find } = extra;
	if (m.fromMe) return
	let { u } = find
	/* Aku dapet dari : https://stackoverflow.com/questions/36367532/how-can-i-conditionally-import-an-es6-module */
	const e_ = async (err) => {
		conn.sendteks(m.chat, `Maaf!!!\nAda yang error :(\nLaporan error dikirim ke owner otomatis untuk diperbaiki...`, m)
		q.developer.map(async (v) => { await q.delay(3000); conn.sendteks(v + q.idwa,`Command : /${m.command}\nOleh : @${m.sender.split("@")[0]}\n\n${bb(format(err))}`,d.f1(err, ""),{ mentions: [m.sender] }) });
	};
	// Plugin ( before command )
	cates.filter(dirent => dirent.isDirectory() && dirent.name.startsWith('_'))
		.map(folder => {
			fs.readdirSync(join(rootdir, folder.name))
			.map(async file => {
				if (m.message && !isblock) {
					let read = await import("./"+folder.name+"/"+file); // File in folder start with "_"
					try {
						read.default(m, extra);
					} catch (e) {
						console.log(e);
					}
				}
		})
	})
	
	// Plugin ( command )
	conn.ErrorPlugin = true
	cates.filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_'))
	.map(async folder => {
		let files = fs.readdirSync(join(rootdir, folder.name))
		for (let file of files) {
			try {
				let plugin = await import("./"+folder.name+"/"+file)
				if (!plugin.cmd) continue;
				let nameFile = file.split('.')[0]
				let command = plugin.cmd.command
				let alias = plugin.cmd.alias 
				let cate = plugin.cmd.catogory 
				let desc = plugin.cmd.description 
				if (!(nameFile in db.cmd)) {
					db.cmd[nameFile] = {}
					db.cmd[nameFile].first = command
					db.cmd[nameFile].path = join(rootdir, folder.name, file)
					db.cmd[nameFile].isgrup = false
					db.cmd[nameFile].isadmin = false
					db.cmd[nameFile].isbotadmin = false
					db.cmd[nameFile].isowner = false
					db.cmd[nameFile].isdev = false
					db.cmd[nameFile].category = cate
					db.cmd[nameFile].lastused = Date.now()
					db.cmd[nameFile].hit = 0
					db.cmd[nameFile].hittoday = 0
				}
				// Information Command
				if ((m.command == command || alias.includes(m.command)) && m.args[0] == "-i") {
					let text = `❕❕❕Command ${m.preff + m.command} ❕ ❕ ❕\n\nCommand utama: ${m.preff + command}\nCommand alias: ${alias.map(v => m.preff + v).join(', ')}\nCategory: ${cate}\nDescription: ${desc ? desc : "Belum terdeskripsikanpsikan"} `
					conn.sendteks(m.chat, text, d.f1(`Information Command`,''))
					continue
				}

				// calling command + add hit, lastused
				if (m.command == command || alias.includes(m.command)) {
						plugin.default(m, extra)
						.catch(e => e_(e)); // Send error to owner
						db.cmd[nameFile].hittoday += 1
						db.cmd[nameFile].hit += 1
						db.cmd[nameFile].lastused = Date.now()
				}
				// Upgraded Level automated
				if (m.command == command || alias.includes(m.command) && cate == "#rpg") {
					if (!db.users[u][1].daftar) return
					db.users[u][2].lasthit = Date.now()
					db.users[u][2].xp += 1
					if (db.users[u][2].xp == db.users[u][2].up) {
					db.users[u][2].xp += 1
					let levelAwal = db.users[u][2].level
					db.users[u][2].level += 1
					db.users[u][2].up *= db.users[u][2].level
					let hadiah = db.users[u][2].hadiah
					db.users[u][2].hadiah *= 3
					let maxbank = db.users[u][2].maxbank 
					db.users[u][2].maxbank *= 3
					let maxcredit = db.users[u][2].maxcredit
					db.users[u][2].maxcredit *= 2
					q.delay(2000)
					repl(`LEVEL UP!!!\n\n`
					+ `Level: ${levelAwal} => ${db.users[u][2].level}\n`
					+ `Hadiah: +${(hadiah * 3).rupiah()}\n`
					+ `Progress XP: ${db.users[u][2].up}\n\n`
					+ `Kapasitas Bank: ${maxbank.rupiah()} => ${db.users[u][2].maxbank.rupiah()} Rupe\n`
					+ `Max Kredit: ${maxcredit.rupiah()} => ${db.users[u][2].maxcredit.rupiah()}`
					)
				}
				}
			} catch (e) {
				// when you syntax error here
				if (e && conn.ErrorPlugin) console.log(format(e)), conn.ErrorPlugin = false; continue;
			}
		}
	})
}

export {
	cates,
	rootdir,
}