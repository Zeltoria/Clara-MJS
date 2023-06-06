const handle = {
  say: ["liststore"],
  category: "#database",
  describe: "Melihat Toko Yang Terdaftar",
  master: async (m, { q, conn, bot, db }) => {
    let i = db.set.findIndex((v) => v[0] == bot);
    let vibe = Object.keys(db.set[i][1].store);
    let but =
      vibe.length !== 0
        ? vibe
            .filter((v) => v.includes(v.toUpperCase()))
            .map((v) => [
              v,
              `.${v.toLowerCase()}`,
              `Dibuat Oleh : ${db.set[i][1].store[v.toUpperCase()].creator
                .map((v) => v.split("@")[0])
                .join(" - ")}. |  Dibuat pada : ${q.time(
                new Date() * 1 - db.set[i][1].store[v.toUpperCase()].date
              )} Yang Lalu | Di Update Pada : ${q.time(new Date() * 1 - db.set[i][1].store[v.toUpperCase()].update)}`
            ])
        : [["Belum Ada Store Yang Terdaftar", "", q.name]];
    conn.sendlist(m.chat, `List Message Clara >>_<<`, q.name, but, m);
  }
};

export default handle;
