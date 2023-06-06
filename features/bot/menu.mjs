import fs from "fs";
import { join } from "path";

const handle = {
  say: ["menu", "help"],
  category: "#bot",
  describe: "Menginformasikan Daftar Perintah Yang Tersedia",
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
      `*Clara - Multidevices*\n\n` +
      `Sistem Berjalan :\n${(Date.now() - running).timers()}\n` +
      `Ram Terpakai : ${process.memoryUsage.rss().sizeString(0)}\n` +
      `Total Hit : ${Object.entries(db.cmd)
        .map((v) => v[1].hit)
        .reduce((a, b) => a + b)}\n` +
      `Total User : ${db.users.length} User\n` +
      `Total Group : ${db.grup.length} Group\n` +
      `Total Fitur: ${cmd.length}\n` +
      `Total Menu: ${cates.length}\n` +
      `Sistem Berjalan:\n ${(Date.now() - running).timers()}\n` +
      `\n` +
      cates
        .map(
          (c) =>
            `*${(c.split("#")[1]).toUpperCase()}*\n${cmd
              .filter(({ category }) => category == c)
              .map(({ first }, i) => `${i + 1}. ${m.preff + first}`)
              .join("\n")}`
        ) 
        .join("\n\n") +
      `\n\n*Note:*\nUntuk Mencari Informasi Lainnya Tentang Perintah Kamu Bisa Mengetikan Perintah Dan Menambahkan -i\nContoh: .menu -i`;
      let gambarnye = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQX_NA4wV_o-GOZ4ZZ-LJ_cwuNKRtEqEswA&usqp=CAU'
    conn.sendMessage(m.chat, { image: { url: gambarnye }, caption: teks }, { quoted: m });
  }
}

export default handle;