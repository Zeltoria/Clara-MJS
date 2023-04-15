import fs from "fs";
import simi from "similarity";
let sensitive = 0.75,
database = {}

const handle = {
  say: ["tebakgambar"],
  category: "#game",
  describe: "game tebak tebakan gambar",
  master: async (m, { q, conn, d, repl }) => {
    let i = m.chat;
    if (i in database) return repl("Masih ada game trbak gambar yang belom selesai...");
    let res = JSON.parse(fs.readFileSync(process.cwd() + "/utils/db/tebakgambar.json")).rendem();
    let desc = res.deskripsi;
    let jwbn = res.jawaban;
    console.log("Deskripsi: " + desc + "\n" + "Jawaban: " + jwbn);
    database[i] = [
      await conn.sendteks(
        i,
        `Gambar tersebut terdapat ${desc}\n\nWaktu ${q.timeoutgame / 1000} detik`,
        m,
        d.f2("", res.img, "")
      ),
      jwbn.toLowerCase(),
      setTimeout(async function () {
        if (i in database) {
          await repl(`Waktu habis :)\nJawaban nya adalah : ${database[i][1]}`);
          delete database[i];
        }
      }, q.timeoutgame + 20000)
    ];
  },
  main: async (m, { q, conn, bb, budy, repl }) => {
    let i = m.chat;
    if (i in database) {
      if (simi(database[i][1], budy.toLowerCase()) >= sensitive) {
        repl(`Jawaban benarr!!!\n\nJawaban : ${database[i][1]}`);
        clearTimeout(database[i][2]);
        delete database[i];
      }
    }
  }
};

export default handle;
