import axios from "axios";

const handle = {
  say: ["spotifysearch", "spotsearch"],
  category: "#internet",
  describe: "Mencari Audio Dari Spotify",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan Query Nya Contoh : .${m.command} Not You`);
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(
      `https://api.alyachan.my.id/api/spotify?q=${m.args[0]}`
    );
    let anu = data.data[Math.floor(Math.random() * data.data.length)]
    conn.sendMessage(
      m.chat,
      { image: { url: anu.thumbnail }, caption: `Judul: ${anu.title}\nDurasi: ${anu.duration}\nArtist: ${anu.artist}\nPublish: ${anu.release_date}\nPopularity: ${anu.popularity}\nPreview: ${anu.preview}\nUrl: ${anu.url}` },
      { quoted: m }
    );
  }
};

export default handle;
