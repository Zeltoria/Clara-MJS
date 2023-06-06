import { format } from "util";
import axios from "axios";
import cheerio from "cheerio";
import pretty from "pretty";
import { toUrl } from "../../utils/lib/convert.media.lib.mjs";

const handle = {
  say: ["ev2", "evalasync"],
  category: "#owner",
  describe: "",
  master: async (
    m,
    { q, d, conn, grup, findAdmin, bb, budy, meta, members, admins, isAdmin, isBotAdmin, bot, mime, quoted, quotry, db }
  ) => {
    if (!m.isDev) return repl("Lhoo, Kamu Siapa?");
    try {
      let evaling = await eval(`(async () => { return ${m.query ? m.query : innalillahi_wainna_ilaihi_rojiuun} })()`);
      conn.sendteks(m.chat, format(evaling), m);
    } catch (e) {
      conn.sendteks(
        m.chat,
        (await format(e)) + "\n\n*Kamu Sepertinya Harus Banyak Belajar Sayang*\n*Jangan Asal Copas Wkwk*",
        d.f1(e, "")
      );
    }
  }
};

export default handle;
