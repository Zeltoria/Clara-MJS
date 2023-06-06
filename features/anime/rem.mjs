const handle = {
  say: ["rem"],
  category: "#anime",
  describe: "Text Maker Rem",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan Teksnya!!!\nContoh: .rem Clara`
      );
    await repl("_Sedang Di Proses...._")
    conn.sendMessage(m.chat, { image: { url: `https://api-xcoders.site/api/maker/ren?text=${m.args[0]}&apikey=Frieren`}, caption: `Nih Kak Hasil Resultnya`}, { quoted: m })
  }
}

export default handle