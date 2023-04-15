import axios from "axios";

const handle = {
  say: ["facebookdl", "fb", "fbdl"],
  category: "#downloader",
  describe: "mendownload video dari facebook",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan url nya contoh : .${m.command} https://www.facebook.com/AnnaTami.chan/videos/1259337391211843`
      );
    await repl("load...");
    const { data } = await axios.get(`${q.akuari}/downloader/fbdl3?link=${m.args[0]}`);
    conn.sendMessage(m.chat, { video: { url: data.hasil.hd }, caption: `Judul: ${data.hasil.title}\n` }, { quoted: m });
  }
};

export default handle;
