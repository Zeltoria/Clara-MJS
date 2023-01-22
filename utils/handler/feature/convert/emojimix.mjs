import { imgToStiker } from "../../../util/convert-media.mjs";
import fetch from "node-fetch";

const handle = async (m, { q, conn, repl, find, db }) => {
   let [t1, t2] = m.query.split("+");
   if (!t1) return repl('Contoh penggunaan .emojimix 🥲+🥴')
   if (!encodeURIComponent(t1).startsWith('%F0%9F')) return repl('Itu bukan Emote!!, emote tuh gini "☺️"')
   if (!t2) return repl('Contoh penggunaan .emojimix 🥲+🥴')
   if (!encodeURIComponent(t2).startsWith('%F0%9F')) return repl('Itu bukan Emote!!, emote tuh gini "☺️"')
   let { b } = find
   let res = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(t1)}_${encodeURIComponent(t2)}`)).json();
   if (res.results[0] === undefined) return repl("Mix emoji tidak tersedia");
   let res2 = await imgToStiker(await q.getbuff(res.results[0].url), {
      name: db.set[b][1].pack,
      author: db.set[b][1].auth,
   });
   conn.sendstik(m.chat, res2, m);
};

export default handle;

export let cmd = {
	command: "emojimix",
	alias: ["mix", "campur"],
	catogory: "#convert",
	description: "",
}
