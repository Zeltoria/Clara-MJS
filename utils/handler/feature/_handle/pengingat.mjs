const handle = async (m, { q, conn }) => {
	var isTrue = true 
	let maxRam = parseInt(process.env.SERVER_MEMORY)
	let ram = parseInt((process.memoryUsage.rss() /1024) /1024)
	if (ram > (maxRam - 100) && isTrue) {
		if (/pm2/i.test(process.env._)) {
			await conn.sendteks(q.developer[0] + "@s.whatsapp.net", `*PEMBERITAHUAN*\n\nRam Hampir mencapai batas, Sistem merestart BOT otomatis karena memakai PM2`)
			eval(`process.exit()`)
			isTrue = false
			return
		}
		if (/npm/i.test(process.env._)) {
			await conn.sendteks(q.developer[0] + "@s.whatsapp.net", `*PERINGATAN*\n\nRam Hampir mencapai batas, Bot tidak dapat merestart sendiri karena memakai NPM`)
			isTrue = false
			return
		}
	}
}

export default handle;
