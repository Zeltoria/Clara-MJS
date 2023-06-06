import fs from "node:fs";
import axios from "axios";

export default {
  name: "Clara - MD", //nama sih
  dev: ["62857604516837"],
  developer: JSON.parse(fs.readFileSync("./Setting/owner.json")) ?? ["62857604516837"], // Cek di owner.json
  moderator: JSON.parse(fs.readFileSync("./Setting/mod.json")) ?? [], // Cek di mods.json
  prems: JSON.parse(fs.readFileSync("./Setting/prems.json")) ?? ["62857604516837"], // cek di prems.json
  browser: ["Clara", "Safari", "1.0.0"],
  gcbot: ["120363028160234241@g.us"] /* Only ID */,
  thumb: "https://telegra.ph/file/56dc40ec3482f73f0f1c7.jpg",
  thumb2: "https://telegra.ph/file/56dc40ec3482f73f0f1c7.jpg",
  emailgh: "elistz21@gmail.com", // Setting to your email github
  usernamegh: "Zeltoria", // setting to your username github
  longqr: 50000, // DURASI LAMA QR
  timeoutgame: 50000, // Waktu berakhir game
  sensitive: 0.75, // Kesensitivitas command
  longbc: 7000, // Long BC adalah Penjagaan Broadcast anti banned
  namedb: "database", // Nama Database
  session: "Sessions", // Nama Session Folder nyaa [ Ini bakalan jadi Folder bukan file ]

  akuari: "https://api.akuari.my.id", // Api botcahx
  // FAIL MESSAGES
  //INI UBAH SAJA SESUAI KEBUTUHAN [KALO BISA DITAMBAHIN]
  connect: "Bot Telah Tersambung Ke Konneksi Server Whatsapp Web",
  sukses: "Berhasil Kak :)",
  gagal: "Gagal :(, Mohon Ulangi Perintah\nJika Ini Error Mohon Lapor Ke Owner",
  owner: "Fitur Ini Khusus Ownerku",
  prem: "Fitur Ini Khusus User Premium Kak",
  moderr: "Fitur Ini Khusus Moderatorku",
  forgc: "Fitur Ini Untuk Di Group",
  forpc: "Fitur Ini Untuk Di Private Chat",
  leave:
    "Hai Kak, Saya Diperintahkan Owner Untuk Keluar Dari Group Ini :)\nMohon Maaf Ya Kak Jika Aku Punya Banyak Kesalahan :)\nSayonara >,<",
  forimg: "Kirim Foto Lalu Ketik Caption Perintah Atau Kirim Foto Dulu Lalu Di Reply Fotonya Pake Perintah",
  forteks: "Reply Atau Tag Member Atau Ketik Nomor Member Setelah Perintah",
  teks: "Reply Teks / Masukan Karakter Setelah Perintah",
  admin: "Kamu Bukan Orang Penting_-\nKhusus Admin",
  botadmin: "Aku Bukan Admin T_T\nAdminin Dulu Dong",
  active: "Sebelumnya Emang Udah Aktif :v",
  unactive: "Sebelumnya Emang Udah Ga Aktif :v",
  aslink: "Masukan Link Setelah Perintah",
  query: "Masukan Quert Atau Kata Kuncinya Setelah Perintah",
  flink: "Link Yang Kamu Masukan Tidak Valid",
  gcouttime: "Hai Kak, Ini Masa Aktifnya Telah Habis, Aku Akan Keluar Otomatis",
  linkadm: "Admin Group Tidak Mengijinkan Link Group Untuk Di Share :)",
  notext: "Teks Nya Mana?",
  wait: "Sedang Di Proses...",
  ok: "Oke Sayang",
  // SET WELLCOME DEFAULT
  // @sub @user @admin @jmlh
  joingc:
    "Hai Kak, Saya Clara\nSaya Masuk Kesini Atas Dasar Perintah Owner Saya :)\nSaya Out Dari Group Ini Jika Owner Saya Memerintahkan Keluar\nMohon Gunakan Fiturku Sebaik Mungkin Yaah :)",
  fsub: "@admin Telah Mengubah Subject Group Menjadi @sub",
  fppgc: "@admin Telah Mengubah Foto Profile Group",
  fbgc: "@admin Telah Membuka Group In, Member Sekarang Dapat Mengirim Pesan Ke Group Ini",
  ftgc: "@admin Telah Menutup Group Ini, Member Sekarang Tidak Dapat Mengirim Pesan Ke Group Ini",
  fbinp: "@admin Telah Mengubah Setelan Group Ini, Member Sekarang Dapat Mengedit Info Group Ini",
  ftinp: "@admin Telah Mengubah Setelan Group Ini, Member Sekarang Tidak Dapat Mengedit Info Group Ini",
  fpm: "@admin Telah Nenaikan Jabatan @user Menjadi Admin Di Group Ini",
  fdm: "@admin Telah Menurunkan Jabatan @user Menjadi Member Biasa",
  faddadmin: "@admin Telah Menambahkan @user Kedalam Group Ini\nKatakan Hai Kepada Beban Grup Baru",
  faddlink: "@user Telah Bergabung Ke Group Ini Menggunakan Tautan\nKatakan Hai Kepada Beban Grup Baru :)",
  faddinv: "@user Telah Bergabung Dengan Group Menggunakan Undanganku",
  fout: "@user Tersebut Telah Keluar Dari Group Ini :(",
  fkick: "@admin Telah Mengeluarkan @user Dari Group Ini :v\nYahh Beban Group Telah Keluar",
  fephe: "@admin Telah Menetapkan Pesan Sementara Pada Group Ini @jmlh",
  fofephe: "@admin Telah Mematikan Pesan Sementara Pada Group In",
  fownerjoin: "Ayangku Telah Bergabung Dengan Tautan\nBeri Salam Dan Hormat Kepada Dia :)",
  // Aesthetic
  tit: (teks) => "*------: " + teks + " :------*",
  cmd: (teks) => "  • " + teks,
  sub: (teks) => "  *< " + teks + " />*",
  a4: "╔══ஓ ๑ ♡ ๑ ஓ══╗",
  a5: "╚══ஓ ๑ ♡ ๑ ஓ══╝",
  a6: "*----:--:-{23}-:--:----*",

  // males ngetik @s.wangsaf atau @g.us
  // Dibawah ini jangan di ubah bang
  idwa: "@s.whatsapp.net",
  idgc: "@g.us",
  idst: "status@broadcast",
  home: "https://github.com/Zeltoria/BASE-MJS#readme",
  bug: "https://github.com/Zeltoria/BASE-MJS/issues",
  video: "https://github.com/bolaxd/store-All/blob/main/hehe.mp4",
  // Ini Function [ Jangan di ganti yaah :) ]
  /**
   *
   * @param {Number} ms date type number
   * @returns {Promise} promised setTimeout
   *
   */
  delay: async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
  /**
   * @param {Number} nominal nominal for duwit
   * @returns {String} string duwit with koma <,>
   *
   */
  rb: (nominal) => {
    var numb = nominal.toString();
    var sisa = numb.length % 3;
    var rupe = numb.substr(0, sisa);
    var ribu = numb.substr(sisa).match(/\d{3}/g);
    let heh;
    if (ribu) heh = sisa ? "," : "";
    rupe += heh + ribu.join(",");
    return rupe;
  },
  /**
   *
   * @param {String} url url from internet
   * @returns {Boolean} true / false type url?
   */
  url: (url) => {
    return url.match(
      new RegExp(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
        "gi"
      )
    );
  },
  /**
   * Random value
   * @param {Array} array array to random value
   * @returns value
   */
  rdm: (array) => {
    return array[Math.floor(Math.random() * array.length)];
  },
  /**
   * cutting text
   * @param {String} teks teks/ value teks yang akan dipotong
   * @param {Number} pnjg panjang teks yang ingin dipotong
   * @returns value
   */
  cut: (teks, pnjg) => (teks.length > pnjg ? `${teks.substr(0, pnjg)}\n<More${teks.length - pnjg} Character>` : teks),
  /**
   * Time string with modern digital time
   * @param {Number} times new date selisih
   * @returns string time
   */
  time: (times) => {
    const seconds = Math.floor((times / 1000) % 60),
      minutes = Math.floor((times / (60 * 1000)) % 60),
      hours = Math.floor((times / (60 * 60 * 1000)) % 24),
      days = Math.floor(times / (24 * 60 * 60 * 1000));
    return (
      (days ? `${days} Hari ` : "") +
      (hours ? `${hours} Jam ` : "") +
      (minutes ? `${minutes} Menit ` : "") +
      (seconds ? `${seconds} Detik` : "")
    ).trim();
  },
  /**
   * rename file to .tmp
   * @param {String} fileWithPath Path/ letak file berada yg akan di rename
   * @returns
   */
  tmp: async (fileWithPath) => await fs.renameSync(fileWithPath, fileWithPath + ".tmp"),
  /**
   * get buffer from url using axios
   * @param {String} url url to getting buffer
   * @returns
   */
  getbuff: async (url) => {
    const res = await axios({
      method: "get",
      url,
      headers: { DNT: 1, "Upgrade-Insecure-Request": 1 },
      responseType: "arraybuffer"
    });
    return res.data;
  }
};
