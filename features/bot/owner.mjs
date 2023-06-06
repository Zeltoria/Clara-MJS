const handle = {
  say: ["developer", "owner", "adminbot", "creator"],
  category: "#bot",
  describe: "Melihat Contact Developer",
  master: async (m, { q, conn }) => {
    let kontak = [["Zeltoria", q.developer[0], ""]];
    await conn.sendkon(m.chat, q.name, kontak, m).catch((v) => conn.sendteks(m.chat, q.gagal, m));
  }
};

export default handle;
