const handle = {
  main: async (m, { q, conn, bot, db }) => {
    let i = db.set.findIndex((v) => v[0] == bot);
    if (!db.set[i][1].store[m.command.toLowerCase()]) return;
    if (db.set[i][1].store[m.command.toLowerCase()]) {
      let b = Object.values(db.set[i][1].store[m.command.toLowerCase()]);
      let list =
        b.length !== 0
          ? b.map((v) => [v.tilte, `.respons ${m.command.toLowerCase()}@${v.tilte}`, v.des ? v.des : ""])
          : [
              [
                "Belum Ada List Disini",
                "",
                "Perintah Add List : *.addlist namastore@namalist@namadeskripsi* \nLakukan Lah Sambil Mereply Pesan Isi"
              ]
            ];
      conn.sendMessage(m.chat, { text: `List Message Dari ${m.command}\n`, + list }, { quoted: m});
    }
  }
};

export default handle;
