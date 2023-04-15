import { imgToStiker, wmSticker, vidToStiker } from "../../utils/lib/convert.media.lib.mjs";

const handle = {
  say: ["swm", "stikerwm", "wm", "take", "stickerwatermark"],
  category: "#tools",
  describe: "add user kedalam group",
  master: async (m, { q, conn, mime, quoted, d, repl }) => {
    let teks =
      "kirim gambar / video dengan caption .swm nama|pack-stiker\nAtau reply stiker dan balas lah dengan .swm nama|pack-stiker";
    let [t1, t2] = m.query.split("|");
    if (!t1) return repl(teks);
    if (!t2) return repl(teks);
    if (/webp/.test(mime)) {
      let dl = await m.quoted.download();
      let res = await wmSticker(dl, { name: t2, author: t1 });
      conn.sendstik(m.chat, res, m);
    } else if (/video/.test(mime)) {
      let dl = await quoted.download();
      let res = await vidToStiker(dl, { name: t2, author: t1 });
      conn.sendstik(m.chat, res, m);
    } else if (/image/.test(mime)) {
      let dl = await quoted.download();
      let res = await imgToStiker(dl, { name: t2, author: t1 });
      conn.sendstik(m.chat, res, m);
    } else return repl(teks);
  }
};

export default handle;
