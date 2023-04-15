import axios from "axios";

const handle = {
  say: ["tiktokaudio", "tta", "ttaudio"],
  category: "#downloader",
  describe: "mendownload video dari tiktok dan men-convert menjadi audio",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan url nya contoh : .${m.command} https://vm.tiktok.com/ZSJcLPNpe`);
    if (/^(vm|vt).*tiktok/i.test(m.args[0])) return repl(`Url salah! contoh url: https://vm.tiktok.com/ZSJcLPNpe`);
    await repl("load...");
    const { data } = await axios.get(`${q.akuari}/downloader/tiktok3?link=${m.args[0]}`);
    conn.sendMessage(m.chat, { audio: { url: data.hasil.download_mp4 }, mimetype: "audio/mp4" }, { quoted: m });
  }
};

export default handle;
