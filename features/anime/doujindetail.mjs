import axios from "axios";

const handle = {
  say: ["doujindetail"],
  category: "#anime",
  describe: "Mendapatkan Informasi Doujin Dari Doujindesu",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(`Masukan Urlnya Nya Contoh : .${m.command} https://212.32.226.234/manga/okaasan-no-kiken-na-saikai/`)
    await repl("_Sedang Di Proses...._")
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/anime/doujindesu/detail?url=${m.args[0]}&apikey=Elistz`)
    conn.sendMessage(m.chat, { image: { url: data.thumbnail }, caption: `Judul: ${data.title}\nJapanese: ${data.titles}\nTags: ${data.tags}\nStatus: ${data.metadata.status}\nType: ${data.metadata.type}\nSeries: ${data.metadata.series}\nRating: ${data.metadata.rating }\nUrl: ${data.links[0].url}` }, { quoted: m })
  }
}

export default handle;
