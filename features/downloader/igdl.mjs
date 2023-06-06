import axios from "axios";

const handle = {
  say: ["instagram", "ig", "igdl"],
  category: "#downloader",
  describe: "Mengunduh Video Dari Instagram",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan Url Nya Contoh : .${m.command} https://www.instagram.com/reel/CsQiaDCvaSY/?igshid=NTc4MTIwNjQ2YQ==`
      );
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(`https://api.zeltoria.my.id/api/download/instagram?apikey=Sange&url=${m.args[0]}`);
    conn.sendMessage(m.chat, { video: { url: data.result[0].url }, caption: `Nih Kak Videonya` }, { quoted: m })
  }
}

export default handle;
