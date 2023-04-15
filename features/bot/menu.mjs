import fs from "fs";
import { join } from "path";

const handle = {
  say: ["help", "menu", "command"],
  category: "#bot",
  describe: "menginformasikan daftar/menu perintah yang tersedia di bot ini",
  master: async (m, { q, conn, d, bb, bot, more, db }) => {
    let cmd = Object.values(db.cmd),
      cates = cmd.map(({ category }) => category).reduce((v, i) => (v.includes(i) ? v : [...v, i]), []),
      filterCates = q.developer.map((v) => v + "@s.whatsapp.net").includes(m.sender)
        ? cates
        : cates.filter((v) => v != "#system" && v != "#owner"),
      _b = 0,
      running = JSON.parse(fs.readFileSync(join(q.session, "app_run.txt"))),
      topFitur = Object.entries(db.cmd).sort((a, b) => b[1].hit - a[1].hit);
    let teks =
      `*BALLBOT MENUES*\n\n` +
      `Starting Bot : ${(Date.now() - running).timers()}\n` +
      `Ram Used Bot : ${process.memoryUsage.rss().sizeString(0)}\n` +
      `Total Hit Bot : ${Object.entries(db.cmd)
        .map((v) => v[1].hit)
        .reduce((a, b) => a + b)}\n` +
      `Total Database user : ${db.users.length} Users\n` +
      `Total Database group : ${db.grup.length} groups\n` +
      `Total Fitures: ${cmd.length}\n` +
      `Total Categories: ${cates.length}\n` +
      `\n` +
      cates
        .map(
          (c) =>
            `*${("menu " + c.split("#")[1]).toUpperCase()}*\n${cmd
              .filter(({ category }) => category == c)
              .map(({ first }, i) => `${i + 1}. ${m.preff + first}`)
              .join("\n")}`
        )
        .join("\n\n") +
      `\n\n*NOTE:*\nUntuk mencari informasi lainnya tentang command bot anda bisa mengetikan perintah dan menambahkan -i\nContoh: .afk -i`;
    conn.sendteks(m.chat, teks, m);
  }
};

export default handle;
