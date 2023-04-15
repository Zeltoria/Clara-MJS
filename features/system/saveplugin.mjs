import { writeFileSync } from "fs";
import path from 'path'

const handle = {
  say: ["saveplugin", "sp"],
  category: "#system",
  describe: "",
  master: async (m, { q, conn, repl, bot, db }) => {
    conn.file = conn.file ? conn.file : {};
    if (!m.isDev) return repl("perintah khusus developer");
    if (!m.quoted)
      return repl(
        `Mau simpan plugin dengan command apa? reply teks script nya bang\n`
      );
    if (!m.args[0]) return repl(`Mau simpan plugin di path apa?`);
      await writeFileSync(path.join(process.cwd(), 'features', `${m.args[0]}.mjs`), m.quoted.text);
      await repl(`Sukses tersave di path ${m.args[0]}`);
    }
};

export default handle;
