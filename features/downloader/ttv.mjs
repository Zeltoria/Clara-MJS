import axios from "axios";

const handle = {
  say: ["tiktokvideo", "ttv", "ttvideo"],
  category: "#downloader",
  describe: "mendownload video dari tiktok",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan url nya contoh : .${m.command} https://vm.tiktok.com/ZSJcLPNpe`);
    if (/^(vm|vt).*tiktok/i.test(m.args[0])) return repl(`Url salah! contoh url: https://vm.tiktok.com/ZSJcLPNpe`);
    await repl("load...");
    const { data } = await axios.get(`${q.akuari}/downloader/tiktok3?link=${m.args[0]}`);
    conn.sendMessage(
      m.chat,
      {
        video: { url: data.hasil.download_mp4 },
        caption: `Author: ${data.hasil.name} || ${data.hasil.username}\n Judul: ${data.hasil.video_title}\n Like: ${data.hasil.like}\n Comment: ${data.hasil.comment}\n Share: ${data.hasil.share}\n Views: ${data.hasil.views}`
      },
      { quoted: m }
    );
  }
};

export default handle;
