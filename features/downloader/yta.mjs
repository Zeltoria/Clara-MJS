import axios from "axios";

const handle = {
  say: ["youtubeaudio", "yta", "ytaudio"],
  category: "#downloader",
  describe: "Mengunduh Audio Dari Youtube",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan Url Nya Contoh : .${m.command} https://youtu.be/NkRYof6rjm4`);
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(
      `https://api.zeltoria.my.id/api/download/ytmp3?url=${m.args[0]}&apikey=Sange`
    );
    conn.sendMessage(
      m.chat,
      { audio: { url: data.download }, mimetype: "audio/mp4" },
      d.f1(`Judul: ${data.title} | size: ${data.size}`, "")
    );
  }
};

export default handle;
