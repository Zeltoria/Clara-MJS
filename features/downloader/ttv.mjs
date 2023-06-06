import axios from "axios";

const handle = {
  say: ["tiktok", "tiktokvideo", "ttdl"],
  category: "#downloader",
  describe: "Mengunduh Video Dari Tiktok",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan Url Nya Contoh : .${m.command} https://vm.tiktok.com/ZSJcLPNpe`);
    if (/^(vm|vt).*tiktok/i.test(m.args[0])) return repl(`Url Salah! Contoh Url: https://vm.tiktok.com/ZSJcLPNpe`);
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(`https://api.alyachan.my.id/api/tiktok?url=${m.args[0]}`);
    conn.sendMessage(
      m.chat,
      {
        video: { url: data.data.nowatermark },
        caption: `Author: ${data.author}\nJudul: ${data.title}\nLike: ${data.stat.like}\nComment: ${data.stat.comment}\nShare: ${data.stat.share}\nViews: ${data.stat.views}`
      },
      { quoted: m }
    );
  }
};

export default handle;
