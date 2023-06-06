import { toUrl } from "../../utils/lib/convert.media.lib.mjs";

const handle = {
  say: ["lihat", "liat", "look"],
  category: "#tools",
  describe: "Melihat Gambar Tanpa Mendownloadnya",
  master: async (m, { q, d, conn, repl }) => {
    if (!m.quoted) return repl("Reply Media Image Yang Ingin Di Lihat");
    let dl = await toUrl(await m.quoted.download());
    conn.sendteks(m.chat, `Lihat Foto Tanpa Download...`, m, d.f2("Clara", dl, dl));
  }
};

export default handle;
