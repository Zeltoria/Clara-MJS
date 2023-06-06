const handle = {
  say: ["afk", "off"],
  category: "#bot",
  describe: "Memberitahukan Kalau Ada Kesibukan Lain",
  master: async (m, { q, conn, repl, db }) => {
    let alasan = m.query ? m.query : " Tanpa Alasan ";
    let i = db.users.findIndex((v) => v[0] == m.sender);
    db.users[i][1].lastafk = Date.now();
    db.users[i][1].reason = alasan;
    repl(`Kamu AFK Dengan Alasan: ${alasan}`);
  }
};

export default handle;
