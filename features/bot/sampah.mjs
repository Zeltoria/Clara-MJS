import fs from "fs";

const handle = {
  say: ["cache", "sampah", "tmp"],
  category: "#bot",
  describe: "melihat sampah/ file trojan di bot",
  master: async (m, { q, conn }) => {
    let all = await fs.readdirSync("./TMP");
    let teks = q.tit("Jumlah Sampah system") + "\n\n";
    teks += `Total : ${all.filter((v) => v.endsWith(".tmp")).map((v) => v).length} Sampah\n\n`;
    teks += all
      .filter((v) => v.endsWith(".tmp"))
      .map((o) => `~${o}~\n`)
      .join("");
    conn.sendteks(m.chat, teks, m);
  }
};

export default handle;
