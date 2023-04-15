import fs from "fs";
import simi from "similarity";
let sensitive = 0.75,
database = {}

const handle = {
  say: ["tebakbendera"],
  category: "#game",
  describe: "game tebak tebakan menebak bendera negara lain",
  master: async (m, { q, conn, d, repl }) => {
    let i = m.chat;
    if (i in database) return repl("Masih ada game di sini...");
    let res = JSON.parse(fs.readFileSync(process.cwd() + "/utils/db/tebakbendera.json")).rendem();
    let jwbn = res.name;
    console.log("Jawaban: " + jwbn);
    database[i] = [
      await conn.sendimg(
        i,
        res.img,
        `Coba tebak bendera ini bendera negara mana?\nWaktu: ${q.timeoutgame / 1000} Detik`,
        m
      ),
      jwbn.toLowerCase(),
      setTimeout(async function () {
        if (i in database) {
          await repl(`Waktu habis :(\nJawaban nya adalah : ${database[i][1]}`);
          delete database[i];
        }
      }, q.timeoutgame)
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
