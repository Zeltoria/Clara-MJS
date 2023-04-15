import fs from "fs";
import { format } from "util";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Read directory plugin
let rootdir = dirname(fileURLToPath(import.meta.url));
let cates = fs.readdirSync(rootdir, { withFileTypes: true });

export default async (m, extra) => {
  let { q, d, bb, bot, conn, isblock, up, isAdmin, isBotAdmin, repl, db, find } = extra;
  if (m.fromMe) return;
  let { u } = find;
  /* Aku dapet dari : https://stackoverflow.com/questions/36367532/how-can-i-conditionally-import-an-es6-module */
  const e_ = async (err) => {
    repl(`Maaf!!!\nAda yang error :(\nLaporan error dikirim ke owner otomatis untuk diperbaiki...`);
    q.developer.map(async (v) => {
      await q.delay(3000);
      conn.sendteks(
        v + q.idwa,
        `Command : /${m.command}\nOleh : @${m.sender.split("@")[0]}\n\n${bb(format(err))}`,
        d.f1(err, ""),
        { mentions: [m.sender] }
      );
    });
  };
  // Plugin ( before command )
  cates
    .filter((dirent) => dirent.isDirectory())
    .forEach(async (folder) => {
      let files = fs.readdirSync(join(rootdir, folder.name));
      for (let file of files) {
        let plugin = await import(`./${folder.name}/${file}`),
          filename = file.split(".")[0];
        if (!plugin.default) continue;
        if (typeof plugin.default !== "object") continue;
        let func = plugin.default;
        if (func.main) {
          if (typeof func.main !== "function") continue;
          func.main(m, extra).catch((e) => console.error(e));
        }
        if (func.master) {
          if (typeof func.master !== "function") continue;
          if (!func.say) continue;
          if (!Array.isArray(func.say)) continue;
          let say = func.say,
            cate = func.category ? func.category : "#other",
            desc = func.describe ? func.describe : "belum terdeskripsikan";
          if (!(filename in db.cmd)) {
            db.cmd[filename] = {};
            db.cmd[filename].first = say[0];
            db.cmd[filename].category = cate;
            db.cmd[filename].lastused = Date.now();
            db.cmd[filename].hit = 0;
            db.cmd[filename].hittoday = 0;
          }
          if (func.say.includes(m.command)) {
            if (m.args[0] === "-i") {
              repl(
                `*INFORMATION COMMAND*\n\n--> command main: ${say[0]}\n--> all command: ${say.join(
                  ", "
                )}\n--> category: ${cate}\n--> description command: ${desc}\n--> filename: ${filename}\n--> hit command: ${
                  db.cmd[filename].hit
                }\n--> last hit: ${(Date.now() - db.cmd[filename].lastused).timers()}\n`
              );
              continue;
            }
            func.master(m, extra).catch((e) => e_(e));
            db.cmd[filename].hittoday += 1;
            db.cmd[filename].hit += 1;
            db.cmd[filename].lastused = Date.now();
          }
        }
      }
    });
};

export { cates, rootdir };
