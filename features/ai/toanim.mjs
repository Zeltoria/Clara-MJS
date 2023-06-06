import { toUrl } from "../../utils/lib/convert.media.lib.mjs";
const handle = {
  say: ["toanime", "jadianime"],
  category: "#bot",
  describe: "Mengubah Fotomu Menjadi Gaya Anime",
  master: async (m, { q, conn, quoted, mime, repl }) => {
    if (!/image/.test(mime)) return repl("Reply/Kirim Gambar Dengan Caption .toanime");
    let dl = await quoted.download();
    let res = await toUrl(dl);
    await repl("_Sedang Di Proses..._")
    conn.sendMessage(m.chat, { image: { url: `https://api-xcoders.site/api/maker/toonify?url=${res}&id=2&apikey=Frieren` }, caption: `Nih Kak Hasilnya, Maaf Kalau Jelek` }, { quoted: m })
  }
}

export default handle;
