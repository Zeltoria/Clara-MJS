import { existsSync } from "node:fs";
import cp, { exec as _exec } from "node:child_process";
import { promisify } from "node:util";
import { join } from "path";
let exc = promisify(_exec).bind(cp);

const handle = {
  say: ["getplugin", "gp"],
  category: "#system",
  describe: "",
  master: async (m, { q, conn, db, repl }) => {
    if (!m.isDev) return conn.sendteks(m.chat, q.owner, m);
    if (!m.args[0]) return conn.sendteks(m.chat, `Salah!!!\nContoh : *.${m.command} owner/bcgc*`, m);
    let plugin = await exc(`cat ${join(process.cwd(), 'features', `${m.args[0]}.mjs`)}`);
    if (plugin.stderr) return repl(plugin.stderr);
    repl(plugin.stdout);
  }
};

export default handle;
