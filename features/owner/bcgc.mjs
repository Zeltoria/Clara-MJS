const handle = {
  say: ["broadcastgroup", "bcgroup", "bcgc"],
  category: "#owner",
  describe: "",
  master: async (m, { q, d, conn, repl, more, quoted, mime }) => {
    if (!m.isOwn) return repl(q.owner);
    if (!m.query) return repl("berikan teks nya");
    let all = Object.keys(await conn.groupFetchAllParticipating());
    let from = m.sender;
    conn.sendteks(
      m.chat,
      `Sedang mengirim Broadcast ke grup ${all.length} selama ${(q.longbc * all.length) / 1000} detik`,
      m
    );
    let teks =
      "```--:--BROADCAST ADMIN--:--```\n\n" +
      m.query +
      "\n\n" +
      more +
      "\n" +
      new Date().toLocaleString() +
      "\n" +
      `Oleh: @${from.split("@")[0]}`;
    for (let i of all) {
      await q.delay(q.longbc);
      await conn.sendteks(i, teks, d.f1("Broadcast Group", ""), { mentions: [from] });
    }
    conn.sendteks(m.chat, q.sukses, m);
  }
};

export default handle;
