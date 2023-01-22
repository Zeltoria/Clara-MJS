import got from  'got'

const  handle  = async (m,  { q,  conn, repl }) => {
	if (!m.query) return  repl(`Apa yang anda  cari?`);
	const res = await got(`${q.api}ai?text=${encodeURIComponent(m.query)}&apikey=${q.key}`).json()
	if (res.status !== 200) return repl(`Maaf API sedang sibuk`)
	await repl(res.message)
}

export default handle;

export let cmd = {
	command: "ai",
	alias: [],
	catogory: "#internet",
	description: "",
}
