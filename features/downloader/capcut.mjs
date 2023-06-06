import axios from "axios";

const handle = {
  say: ["capcut"],
  category: "#downloader",
  describe: "Mengunduh Video Dari Capcut",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan Url Nya Contoh : .${m.command} https://www.capcut.com/watch/7154936981481393409`
      );
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(`https://api-xcoders.site/api/download/capcut?url=${m.args[0]}&apikey=Frieren`);
    conn.sendMessage(m.chat, { video: { url: data.result.url }, caption: `Judul: ${data.result.title}\nDeskripsi: ${data.result.description}` }, { quoted: m })
  }
}

export default handle;
