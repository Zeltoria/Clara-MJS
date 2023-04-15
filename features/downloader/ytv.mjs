import axios from "axios";

const handle = {
  say: ["youtubetvideo", "ytvideo", "ytv"],
  category: "#downloader",
  describe: "mendownload video dari youtube",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan url nya contoh : .${m.command} https://youtu.be/blabla 360`);
    await repl("load...");
    const { data } = await axios.get(
      `${q.akuari}/downloader/youtube3?link=${m.args[0]}&type=${m.args[1] ? m.args[1] : "360"}`
    );
    conn.sendMessage(
      m.chat,
      { video: { url: data.mp4.download }, caption: `Judul: ${data.title}\n Size: ${data.mp4.size}` },
      { quoted: m }
    );
  }
};

export default handle;
