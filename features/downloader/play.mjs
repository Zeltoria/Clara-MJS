import axios from "axios";

const handle = {
  say: ["play", "music"],
  category: "#downloader",
  describe: "Memainkan Audio Dari Youtube",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan Query Nya Contoh : .${m.command} Alan Walker Not You`);
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(
      `https://api-xcoders.site/api/download/play?query=${m.args[0]}&apikey=Frieren`
    );
    conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption: `Judul: ${data.result.title}\nAuthor: ${data.result.author}\nDurasi: ${data.result.duration}\n\n_Audio Sedang Di Kirim....._`}, { quoted: m })
    conn.sendMessage(
      m.chat,
      { audio: { url: data.result.audio_url }, mimetype: "audio/mp4" },
      d.f1(`Judul: ${data.result.title} | Durasi: ${data.result.duration}`, "")
    );
  }
};

export default handle;
