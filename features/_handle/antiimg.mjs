const handle = {
  main: async (m, { up, q, d, conn, isBotAdmin, isAdmin, budy, repl, db }) => {
    if (!m.isGc) return;
    let i = db.grup.findIndex((v) => v[0] == m.chat);
    if (db.grup[i][1].antiimg) {
      if (m.mtype === "imageMessage") {
        await conn.sendteks(
          m.chat,
          "[ Anti Foto ]\nGroup Ini Dilengkapi Dengan Anti Foto\nFoto Kamu Akan Di Hapus",
          d.f1("Notifikasi Keamanan Group", "")
        );
        if (isAdmin) return await repl("Admin Mah Bebas Wkwkwk");
        if (m.isOwn) return await repl("Eh...Owner Mah Bebas");
        if (!isBotAdmin) return await repl("Nggak Jadi, Aku Aja Bukan Admin");
        await conn.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.id,
            participant: m.sender
          }
        });
      }
    }
  }
};

export default handle;
