const handle = {
  say: ["listblock", "lblock"],
  category: "#bot",
  describe: "Melihat Daftar Hitam User Clara",
  master: async (m, { q, d, conn, lblock }) => {
    let teks = q.tit("List Block") + "\n\n";
    teks += `Total: ${lblock.length}\n`;
    teks += lblock.map((u) => "wa.me/" + u.split("@")[0]).join("\n");
    conn.sendteks(m.chat, teks, q.name, d.f1("List Block", ""));
  }
};

export default handle;
