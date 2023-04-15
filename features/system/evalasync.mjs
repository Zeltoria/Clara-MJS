import { format } from "util";
import axios from "axios";
import cheerio from "cheerio";
import pretty from "pretty";
import { toUrl } from "../../utils/lib/convert.media.lib.mjs";

const handle = {
  say: ["ev2", "evalasync"],
  category: "#system",
  describe: "",
  master: async (
    m,
    { q, d, conn, grup, findAdmin, bb, budy, meta, members, admins, isAdmin, isBotAdmin, bot, mime, quoted, quotry, db }
  ) => {
    if (!m.isDev) return repl("perintah khusus developer");
    try {
      let evaling = await eval(`(async () => { return ${m.query ? m.query : innalillahi_wainna_ilaihi_rojiuun} })()`);
      conn.sendteks(m.chat, format(evaling), m);
    } catch (e) {
      conn.sendteks(
        m.chat,
        (await format(e)) + "\n\n*Anda Sepertinya Harus banyak belajar bangg*\n*Jangan Asal tempel code*",
        d.f1(e, "")
      );
    }
  }
};

export default handle;
