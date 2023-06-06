const handle = {
  say: ["thankstoo", "tqto"],
  category: "#bot",
  describe: "Menampilkan Nama Nama Orang Penting",
  master: async (m, { q, d, conn }) => {
    let teks =
      q.tit("Thanks For") +
      "\n\n" +
      `Script Ini Tidak Bisa Berkembang Tanpa Mereka\n` +
      `${q.a6}\nAdiwajshing [ Pembuat Api Baileys ]\n` +
      `https://github.com/adiwajshing\n` +
      `${q.a6}\nAmiruldev20 [ Sang Modifikasi Baileys ]\n` +
      `https://github.com/amiruldev20\n` +
      `${q.a6}\nFokusdotid [ Pengarah BolaXd ]\n` +
      `https://github.com/Fokusdotid\n` +
      `${q.a6}\nBochilTeam [ Pembuat Scraper ]\n` +
      `https://github.com/BochilTeam\n` +
      `${q.a6}\nDavekgw [ Kontributor Script Ini ]\n` +
      `https://github.com/Davekgw\n` +
      `${q.a6}\nShionMDv [ Kontributor Script Ini ]\n` +
      `https://github.com/ShionMDv\n` +
      `${q.a6}\nBolaXd [ Developer Dan Base ]\n` +
      `https://github.com/bolaxd\n` +
      `${q.a6}\nZeltoria [ Recode Dan Nambah Fitur ]\n` +
      `https://github.com/Zeltoria\n`
    conn.sendteks(
      m.chat,
      teks,
      m,
      d.f2("Thanks To...", "https://i.pinimg.com/564x/60/c4/eb/60c4eb10bcbf645fbd6b808f2f6154fc.jpg?size=100", "https://github.com/Zeltoria/")
    );
  }
};

export default handle;

// TQ TO DISINI JANGAN DI HAPUS BANG
// KALIAN BOLEH EDIT SCRIPT GITHUB INI TAPI JANGAN DI APA APAIN FILE b-thanks.js INI
// JIKA ANDA MENGHAPUS DAN TIDAK MENJADIKAN COMMAND NISCAYA ALLAH YANG AKAN BALAS KAMU
// SAYA RELA BERGADANG SETIAP HARI DEMI UPDATE BASE INI
// MEMBUAT NYA LEBIH MUDAH DIGUNAKAN DAN DITAMBAHKAN FITUR NYA
// GW SENDIRI MEMBERI TQ TO DISINI KARENA MEMANG SAYA MENGINGAT JASA MEREKA
// JADI KALIAN YANG CUMA MEMAKAI TOLONG YAAAA
// PLEASE DIKIT [ SAYA AKAN TAMBAHIN FITUR FITUR MENARIK DI REPOSITORY INI ]
