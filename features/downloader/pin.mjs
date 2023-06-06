import axios from "axios";

const handle = {
  say: ["pinterest", "pin"],
  category: "#downloader",
  describe: "Mengunduh/Mencari Gambar Dari Pinterest",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0]) return repl(`Masukan Query Nya Contoh : .${m.command} Loli`);
    await repl("_Sedang Di Proses..._");
    const { data } = await axios.get(
      `https://api.zeltoria.my.id/api/download/pinterest?q=${m.args[0]}&apikey=Elistz`
    );
    let anu = data.result[Math.floor(Math.random() * data.result.length)]
    conn.sendMessage(
      m.chat,
      { image: { url: anu }, caption: `Hasil Pencarian Dari: ${m.args[0]}` },
      { quoted: m }
    );
  }
};

export default handle;
