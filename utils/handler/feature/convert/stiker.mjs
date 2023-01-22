import { imgToStiker, vidToStiker } from "../../../util/convert-media.mjs";

const handle = async (m, { q, conn, d, quoted, mime, find, repl, db }) => {
   let teks = "reply foto / kirim foto dengan caption .stiker";
   let { b } = find
   if (!quoted) return repl(teks);
   if (!/(image\/(jpe?g|png)|video\/(mp4|mov))/.test(mime)) return repl(teks);
   let buf = await quoted.download();
   await q.delay(1000)
   if (/image\/(jpe?g|png)/.test(mime))
      conn.sendstik(m.chat, await imgToStiker(buf, { name: db.set[b][1].pack, author: db.set[b][1].auth }), m);
   else if (/video\/(mp4|mov)/.test(mime))
      conn.sendstik(m.chat, await vidToStiker(buf, { name: db.set[b][1].pack, author: db.set[b][1].auth }), m);
};

export default handle;

export let cmd = {
	command: "sticker",
	alias: ["s", "stiker"],
	catogory: "#convert",
	description: "",
}
