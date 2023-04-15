import axios from "axios";
import { lookup } from "mime-types";

const handle = {
  say: ["mediafiredl", "md", "mddl"],
  category: "#downloader",
  describe: "mendownload file dari mediafire",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan url nya contoh : .${m.command} https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file`
      );
    await repl("load...");
    const { data } = await axios.get(`${q.akuari}/downloader/mediafireDl?link=${m.args[0]}`);
    conn.senddoc(m.chat, data.hasil.link, data.hasil.title, lookup(data.hasil.link), m);
  }
};

export default handle;
