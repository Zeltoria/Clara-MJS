const handle = {
  say: ["join"],
  category: "#owner",
  describe: "",
  master: async (m, { q, conn, repl }) => {
    if (!m.isOwn) throw q.owner;
    if (!m.args[0]) throw q.aslink;
    if (!q.url(m.args[0])) throw q.flink;
    let code = m.args[0].split("whatsapp.com/")[1];
    await conn
      .groupAcceptInvite(code)
      .then((v) => repl(q.sukses))
      .catch((e) => repl(q.gagal));
  }
};

export default handle;
