import fs from "fs";
import simi from "similarity";
let sensitive = 0.75,
database = {}

const handle = {
  say: ["tebakkimia"],
  category: "#game",
  describe: "game tebak unsur kimia mengasah otak kalian tentang kimia",
  master: async (m, { conn, q, d, bb, repl }) => {
    let i = m.chat;
    if (i in database) return repl("Masih ada game di sini!!!\nMohon tunggu selesai...");
    let res = JSON.parse(fs.readFileSync(process.cwd() + "/utils/db/tebakkimia.json")).rendem();
    let soal = res.lambang;
    let jawaban = res.unsur;
    console.log("Soal: " + soal + "\n" + "Jawaban: " + jawaban);
    let teks = `*Game Tebak kimia*\n\nNama unsur kimia dari lambang *${soal}* adalah ...\nWaktu: ${
      q.timeoutgame / 1000
    } detik\n`;
    let teks2 = `Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah : ${bb(jawaban)}`;
    database[i] = [
      await repl(teks),
      soal,
      jawaban.toLowerCase(),
      setTimeout(function () {
        if (database[i]) repl(teks2);
        delete database[i];
      }, q.timeoutgame)
    ];
  },
  main: async (m, { q, conn, bb, budy, repl }) => {
    let i = m.chat;
    if (i in database) {
      if (simi(database[i][2], budy.toLowerCase()) >= sensitive) {
        repl(`Jawaban benarr!!!\n\nSoalan:\n${bb(database[i][1])}\nJawaban : ${database[i][2]}`);
        clearTimeout(database[i][3]);
        delete database[i];
      }
    }
  }
};

export default handle;
