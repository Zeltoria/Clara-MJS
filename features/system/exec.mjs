import { exec } from "child_process";
import { format } from "util";

const handle = {
  say: ["exc", "exec"],
  category: "#system",
  describe: "",
  master: async (m, { conn, d }) => {
    if (!m.isDev) return repl("perintah khusus developer");
    if (!m.query) return;
    await conn.sendteks(m.chat, "Executing...", m);
    exec(m.query, (stderr, stdout) => {
      if (stderr) return conn.sendteks(m.chat, format(stderr), d.f1(stderr, ""));
      if (stdout) return conn.sendteks(m.chat, format(stdout), d.f1(stdout, ""));
    });
  }
};

export default handle;
