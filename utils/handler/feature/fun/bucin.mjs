import { bucin } from "@bochilteam/scraper";

const handle = async (m, { q, conn, bb, repl }) => {
    repl(bb(await bucin())+'\n\n By :'+q.name)
}

export default handle;

export let cmd = {
	command: "bucin",
	alias: [],
	catogory: "#fun",
	description: "",
}
