import axios from "axios";

const handle = {
  say: ["otakusearch"],
  category: "#anime",
  describe: "Mendapatkan Informasi Anime Dari Otakudesu",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(`Masukan Querynya Nya Contoh : .${m.command} Oshi No Ko`)
    await repl("_Sedang Di Proses...._")
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/anime/otakudesu/search?query=${m.args[0]}&apikey=Elistz`)
    conn.sendMessage(m.chat, { image: { url: data.result[0].thumbnail }, caption: `Judul: ${data.result[0].title}\nGenre: ${data.result[0].genres}\nStatus: ${data.result[0].status}\nRating: ${data.result[0].rating}\nUrl: ${data.result[0].url}` }, { quoted: m })
  }
}

export default handle
