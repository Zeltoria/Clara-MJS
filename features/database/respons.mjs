const handle = {
  say: ["respons"],
  category: "#database",
  describe: "melihat response list",
  master: async (m, { q, conn, db, bot, repl }) => {
    let [st, nameList] = m.query.split("@");
    if (!st) return;
    if (!nameList) return;
    let store = {
      k: st.toLowerCase(),
      b: st.toUpperCase()
    };
    let i = db.set.findIndex((v) => v[0] == bot);
    if (!db.set[i][1].store[store.k] && !db.set[i][1].store[store.b]) return;
    if (!db.set[i][1].store[store.k][nameList.toLowerCase()])
      return repl(`List itu tidak ada / sudah dihapus oleh owner store ini`);
    repl(
      db.set[i][1].store[store.k][nameList.toLowerCase()].isi +
        "\n\n" +
        `Owner store :\n${db.set[i][1].store[store.b].creator
          .map((v) => v.split("@")[0])
          .join("\n")}\nCreated At: ${q.time(Date.now() - db.set[i][1].store[store.b].date)}`
    );
  }
};

export default handle;
