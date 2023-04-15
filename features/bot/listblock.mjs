const handle = {
  say: ["listblock", "lblock"],
  category: "#bot",
  describe: "melihat daftar hitam user bot ini",
  master: async (m, { q, d, conn, lblock }) => {
    let teks = q.tit("LIST BLOCKED") + "\n\n";
    teks += `Total: ${lblock.length}\n`;
    teks += lblock.map((u) => "wa.me/" + u.split("@")[0]).join("\n");
    conn.sendteks(m.chat, teks, q.name, d.f1("List block bot", ""));
  }
};

export default handle;
