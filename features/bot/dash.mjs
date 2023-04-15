import fs from "fs";
import { join } from "path";

const handle = {
  say: ["dashboard", "dash"],
  category: "#bot",
  describe: "melihat kondisi bot",
  master: async (m, { q, conn, bot, repl, db }) => {
    let _b = 0;
    let dir = fs.readdirSync(q.session);
    let running = JSON.parse(fs.readFileSync(join(q.session, "app_run.txt")));
    let size = dir.map((v) => (_b += fs.statSync(join(q.session, v)).size));
    let topFitur = Object.entries(db.cmd).sort((a, b) => b[1].hit - a[1].hit);
    let teks =
      `DASHBOARD BOT\n\n` +
      `Total Sessions : ${dir.length} Files\n` +
      `Size All sessions : ${_b.sizeString()}\n` +
      `Starting Bot : ${(Date.now() - running).timers()}\n` +
      `System OS : ${process.platform}\n` +
      `Nodejs Version : ${process.version}\n` +
      `Ram Used Bot : ${process.memoryUsage.rss().sizeString(0)}\n` +
      `Max Ram Server : ${process.env.SERVER_MEMORY ?? 0} MB\n` +
      `Time server : ${process.env.TZ ?? "Tidak diketahui"}\n` +
      `Location Server : ${process.env.P_SERVER_LOCATION ?? "tidak diketahui"}\n` +
      `\nTotal Hit Bot : ${Object.entries(db.cmd)
        .map((v) => v[1].hit)
        .reduce((a, b) => a + b)}\n` +
      `Total Database user : ${db.users.length} Users\n` +
      `Total Database group : ${db.grup.length} groups\n` +
      `Total Fitur : ${Object.keys(db.cmd).length} Fitur\n` +
      `Top Fitur : \n${topFitur
        .slice(0, 6)
        .map(
          (v, i) =>
            `*${i + 1}. ${v[0]}*\n ---> Command: ${v[1].first}\n ---> Hit: ${v[1].hit}\n ---> Hit today: ${
              v[1].hittoday
            }\n ---> Last Used: ${(Date.now() - v[1].lastused).timers()}`
        )
        .join("\n")}`;
    repl(teks);
  }
};

export default handle;
