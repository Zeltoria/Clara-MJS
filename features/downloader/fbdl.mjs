import axios from "axios";

const handle = {
  say: ["fbdl2"],
  category: "#downloader",
  describe: "Mengunduh Video Dari Facebook",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(`Masukan Url Nya Contoh : .${m.command} https://www.facebook.com/AnnaTami.chan/videos/1259337391211843`)
    await repl("_Sedang Di Proses...._")
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/download/facebook?url=${m.args[0]}&apikey=Elistz`)
    conn.sendMessage(m.chat, { video: { url: data.data.urls[0].hd }, caption: `Judul: ${data.data.title}\n` }, { quoted: m })
  }
}

export default handle
