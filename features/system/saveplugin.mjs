import { writeFileSync } from "fs";
import path from 'path'

const handle = {
  say: ["saveplugin", "sf"],
  category: "#owner",
  describe: "",
  master: async (m, { q, conn, repl, bot, db }) => {
    conn.file = conn.file ? conn.file : {};
    if (!m.isDev) return repl("Lah??, Kamu Siapa?");
    if (!m.quoted)
      return repl(
        `Mau Simpan Plugin Dengan Dengan Perintah, Reply Teks Script Nya Sayang\n`
      );
    if (!m.args[0]) return repl(`Mau Simpan Plugin Di Path apa?`);
      await writeFileSync(path.join(process.cwd(), 'features', `${m.args[0]}.mjs`), m.quoted.text);
      await repl(`Sukses Menyimpan Di Path ${m.args[0]}`);
    }
};

export default handle;
