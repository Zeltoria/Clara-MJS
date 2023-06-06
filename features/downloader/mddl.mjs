import axios from "axios";
import { lookup } from "mime-types";

const handle = {
  say: ["mediafire"],
  category: "#downloader",
  describe: "Mengunduh File Dari Mediafire",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan Url Nya Contoh : .${m.command} https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file`
      );
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/download/mediafire?url=${m.args[0]}&apikey=Elistz`);
    conn.senddoc(m.chat, data.result.link, data.result.filename, lookup(data.result.link), m);
  }
};

export default handle;
