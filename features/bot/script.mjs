const handle = {
  say: ["source", "sc", "script"],
  category: "#bot",
  describe: "",
  master: (m, { q, conn, bb }) => {
    let teks = `[				Source Code Bot ini				]\n\n`;
    teks += `Kunjungi Github ${q.name} :\n`;
    teks += `${q.home}\n`;
    teks += `Jangan lupa beri bintang & Follow Akun Github Owner ku yah\n`;
    let foot = `Report Jika ada Bug Disini : ${q.bug}`;
    conn.sendteks(m.chat, teks, m);
  }
};

export default handle;
