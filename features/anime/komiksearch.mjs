import axios from "axios";

const handle = {
  say: ["komiksearch"],
  category: "#anime",
  describe: "Mendapatkan Informasi Manga Dari Komiku",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(`Masukan Querynya Nya Contoh : .${m.command} Spy X Family`)
    await repl("_Sedang Di Proses...._")
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/anime/komiku/search?query=${m.args[0]}&apikey=Elistz`)
    conn.sendMessage(m.chat, { image: { url: data.result[0].thumbnail }, caption: `Judul: ${data.result[0].title}\nJudul Indo: ${data.result[0].title_id}\nAwal: ${data.result[0].awal}\nTerbaru: ${data.result[0].terbaru}\nDeskripsi: ${data.result[0].description}\nUrl: ${data.result[0].url}` }, { quoted: m })
  }
}

export default handle
