import axios from "axios";

const handle = {
  say: ["spotifydl"],
  category: "#downloader",
  describe: "Mengunduh Audio Dari Spotify",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan Url Nya Contoh : .${m.command} https://open.spotify.com/track/3Q4gttWQ6hxqWOa3tHoTNi`
      );
      await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(`https://api.alyachan.my.id/api/spotifydl?url=${m.args[0]}`);
    conn.sendMessage(
      m.chat,
      { audio: { url: data.data.url }, mimetype: "audio/mp4" },
      d.f1(`Judul: ${data.data.title} | size: ${data.data.size}`, "")
    );
  }
}

export default handle;
