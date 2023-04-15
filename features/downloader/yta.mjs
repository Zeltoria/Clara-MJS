import axios from "axios";

const handle = {
  say: ["youtubeaudio", "yta", "ytaudio"],
  category: "#downloader",
  describe: "mendownload video dari youtube dan men-convert menjadi audio",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan url nya contoh : .${m.command} https://youtu.be/blabla 360`);
    await repl("load...");
    const { data } = await axios.get(
      `${q.akuari}/downloader/youtube3?link=${m.args[0]}&type=${m.args[1] ? m.args[1] : "360"}`
    );
    conn.sendMessage(
      m.chat,
      { audio: { url: data.audio.audio }, mimetype: "audio/mp4" },
      d.f1(`Judul: ${data.title} | size: ${data.audio.size}`, "")
    );
  }
};

export default handle;
