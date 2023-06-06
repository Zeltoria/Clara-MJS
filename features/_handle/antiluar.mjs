const handle = {
  main: async (m, { up, q, d, conn, isBotAdmin, isAdmin, budy, repl, db }) => {
    if (!m.isGc) return;
    let i = db.grup.findIndex((v) => v[0] == m.chat);
    if (db.grup[i][1].antiluar) {
      if (!m.sender.startsWith("62")) {
        await conn.sendteks(
          m.chat,
          "[ Anti Nomor Luar ]\nGroup Ini Dilengkapi Dengan Anti Nomor Luar",
          d.f1("Notifikasi Keamanan Group", "")
        );
        if (isAdmin) return await repl("Kalau Admin Mah Gapapa :v");
        if (m.isOwn) return await repl("Ownerku Mah Bebas");
        if (!isBotAdmin) return await repl("Aelah, Aku Aja Bukan Admin");
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
      }
    }
  }
};

export default handle;
