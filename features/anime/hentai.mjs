import axios from "axios";

const handle = {
  say: ["hentai"],
  category: "#anime",
  describe: "Mendapatkan Video Doujin Hentai Secara Random",
  master: async (m, { q, conn, d, repl }) => {
    await repl("_Sedang Di Proses...._")
    const { data } = await axios.get(`https://api.ibeng.tech/api/search/hentaivid?apikey=APIKEY`)
    let anu = data.data
    conn.sendMessage(m.chat, { video: { url: anu.hasil.video_1 }, caption: `Judul: ${anu.hasil.title}\nCategory: ${anu.hasil.category}` }, { quoted: m })
  }
}

export default handle;
