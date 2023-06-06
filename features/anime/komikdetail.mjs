import axios from "axios";

const handle = {
  say: ["komikdetaill"],
  category: "#anime",
  describe: "Mendapatkan Detail Manga Dari Komiku",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(`Masukan Urlnya Nya Contoh : .${m.command} https://komiku.id/manga/naruto-konohas-story-the-steam-ninja-scrolls/`)
    await repl("_Sedang Di Proses...._")
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/anime/komiku/detail?url=${m.args[0]}&apikey=Elistz`)
    conn.sendMessage(m.chat, { text: `Judul: ${data.title}\nJudul Indo: ${data.metadata.judul_indonesia}\nAwal: ${data.metadata.awal}\nTerbaru: ${data.metadata.terbaru}\nGenre: ${data.metadata.konsep_cerita}\nKomikus: ${data.metadata.komikus}\nStatus: ${data.metadata.status}\nPembaca: ${data.metadata.jumlah_pembaca}\nDeskripsi: ${data.description}` }, { quoted: m })
  }
}

export default handle;
