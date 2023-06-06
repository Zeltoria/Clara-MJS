import axios from "axios";

const handle = {
  say: ["otakudetail"],
  category: "#anime",
  describe: "Mendapatkan Detail Anime Dari Otakudesu",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(`Masukan Urlnya Nya Contoh : .${m.command} https://otakudesu.lol/anime/kimetsu-yaiba-season-3-sub-indo/`)
    await repl("_Sedang Di Proses...._")
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/anime/otakudesu/detail?url=${m.args[0]}&apikey=Elistz`)
    conn.sendMessage(m.chat, { image: { url: data.thumbnail }, caption: `Judul: ${data.judul}\nJapanesse: ${data.japanese}\nScore: ${data.skor}\nProduser: ${data.produser}\nTipe: ${data.tipe}\nEpisode: ${data.total_episode}\nDurasi: ${data.durasi}\nRilis: ${data.tanggal_rilis}\nStudio: ${data.studio}\nGenre: ${data.genre}` }, { quoted: m })
  }
}

export default handle;
