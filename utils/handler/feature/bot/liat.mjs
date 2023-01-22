import { toUrl } from '../../../util/convert-media.mjs';

const handle = async (m, { q, d, conn, repl }) => {
   if (!m.quoted) return repl('Reply Media image yang ingin di lihat')
   let dl = await toUrl(await m.quoted.download())
   conn.sendteks(m.chat, `Lihat Foto tanpa download...`, m, d.f2('Bolaxd', dl, dl))
};

export default handle;

export let cmd = {
	command: "lihat",
	alias: ["liat"],
	catogory: "#bot",
	description: "",
}
