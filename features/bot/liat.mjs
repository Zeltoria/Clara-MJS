import { toUrl } from "../../utils/lib/convert.media.lib.mjs";

const handle = {
  say: ["lihat", "liat", "look"],
  category: "#bot",
  describe: "melihat gambar tanpa mendownloadnya",
  master: async (m, { q, d, conn, repl }) => {
    if (!m.quoted) return repl("Reply Media image yang ingin di lihat");
    let dl = await toUrl(await m.quoted.download());
    conn.sendteks(m.chat, `Lihat Foto tanpa download...`, m, d.f2("Bolaxd", dl, dl));
  }
};

export default handle;
