import axios from "axios";

const handle = {
  say: ["doujinsearch"],
  category: "#anime",
  describe: "Mencari Doujin Dari Doujindesu",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(`Masukan Querynya Nya Contoh : .${m.command} Milf`)
    await repl("_Sedang Di Proses...._")
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/anime/doujindesu/search?query=${m.args[0]}&apikey=Elistz`)
    let anu = data.result[Math.floor(Math.random() * data.result.length)]
    conn.sendMessage(m.chat, { image: { url: anu.thumbnail }, caption: `Judul: ${anu.title}\nType: ${anu.type}\nStatus: ${anu.status}\nScore: ${anu.score}\nUrl: ${anu.url}` }, { quoted: m })
  }
}

export default handle;
