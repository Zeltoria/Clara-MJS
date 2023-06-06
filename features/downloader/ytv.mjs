import axios from "axios";

const handle = {
  say: ["youtubetvideo", "ytvideo", "ytv"],
  category: "#downloader",
  describe: "Mengunduh Video Dari Youtube",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan Url Nya Contoh : .${m.command} https://youtu.be/NkRYof6rjm4`);
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(
      `https://api.zeltoria.my.id/api/download/ytmp4?url=${m.args[0]}&apikey=Elistz`
    );
    conn.sendMessage(
      m.chat,
      { video: { url: data.download }, caption: `Judul: ${data.title}\nSize: ${data.size}` },
      { quoted: m }
    );
  }
};

export default handle;
