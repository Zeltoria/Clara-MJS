import { antaranews } from '@bochilteam/scraper';

const handle = async (m, { q, conn }) => {
	let res = await antaranews()
	conn.sendimg(m.chat, res[0].image || res[1].image, res.map(v=> `${v.title}\nLink: ${v.link}\n${v.label}\n\n${v.date}`).join('\n'+q.a6+'\n'), m)
}

export default handle;

export let cmd = {
	command: "antara",
	alias: [],
	catogory: "#news",
	description: "",
}
