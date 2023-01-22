import { performance } from 'perf_hooks';

const handle = async (m, { q, d, conn, repl }) => {
	let selisih2 = await performance.now();
	let selisih1 = await performance.now();
	repl(`Kecepatan Bot respons: ${(selisih1 - selisih2).toFixed(3)} milisekon`)
}

export default handle;

export let cmd = {
	command: "ping",
	alias: ["p"],
	catogory: "#bot",
	description: "",
}
