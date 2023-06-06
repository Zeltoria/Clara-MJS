import { unlinkSync, existsSync } from "fs";
import path from "path";

const handle = {
  say: ["delplugin", "dp"],
  category: "#owner",
  describe: "",
  master: async (m, { q, conn, db, repl }) => {
    if (!m.isDev) return conn.sendteks(m.chat, q.owner, m);
    if (!m.args[0]) return conn.sendteks(m.chat, `Salah!!!\nContoh : *.${m.command} owner/bcgc*`, m);
    let cmd = existsSync(path.join(process.cwd(), 'features', `${m.args[0]}.mjs`))
    if (!cmd) return repl(`Plugin Yang Ingin Kamu Hapus Tidak Ada`);
    await unlinkSync(path.join(process.cwd(), 'features', `${m.args[0]}.mjs`));
    await repl(`Sukses Menghapus Plugin ${m.args[0]}`);
  }
};

export default handle;
