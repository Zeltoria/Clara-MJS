const handle = {
  main: async (m, { up, q, d, conn, isBotAdmin, isAdmin, budy, repl, db }) => {
    if (!m.isGc) return;
    let i = db.grup.findIndex((v) => v[0] == m.chat);
    if (db.grup[i][1].antistik) {
      if (m.mtype === "stickerMessage") {
        await conn.sendteks(
          m.chat,
          "[ Anti Sticker ]\nGroup Ini Dilengkapi Dengan Anti Sticker\nSticker Kamu Akan Di Hapus",
          d.f1("Notifikasi Keamanan Group", "")
        );
        if (isAdmin) return await repl("Kamu Admin, Kamu Aman");
        if (m.isOwn) return await repl("Ownerku Mah Bebas");
        if (!isBotAdmin) return await repl("Aku Aja Bukan Admin");
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
