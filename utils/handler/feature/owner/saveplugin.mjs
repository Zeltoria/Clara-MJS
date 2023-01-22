import { writeFileSync, readdirSync } from "fs";
let path = "./utils/handler/feature/";

const handle = async (m, { q, conn, repl, bot, db }) => {
   conn.file = conn.file ? conn.file : {};
   if (!m.isDev) return repl("perintah khusus developer");
   if (!m.quoted) return repl(`Mau simpan plugin dengan command apa? reply teks script nya bang\n\n${q.a6}\nList command : \n${db.cmd.map(v=> v[0]).join('\n')}`);
   if (!m.args[0]) return repl(`Mau simpan plugin dengan command apa?\n\n${q.a6}\nList command : \n${db.cmd.map(v=> v[0]).join('\n')}`);
   let i = db.cmd.findIndex(v=> v[0] == m.args[0])
   if (i === -1) {
   	if (!m.args[1]) return repl(`Anda menyimpan plugin tetapi plugin yang anda save belom ada\nAnda membuat plugin baru, Silahkan anda memasukan category plugin nya!\n\nContoh: ${m.command} loli anime`)
   	let dir = readdirSync(path).filter(_=> !_.startsWith("_") && !_.endsWith(".mjs"))
   	if (!dir.includes(m.args[1])) return repl(`Category yang anda tulis tidak ada\n\n${q.a6}\nBerikut adalah category tersedia:\n${dir.join('\n')}`)
   	db.cmd.push([m.args[0], `${m.args[1]}/${m.args[0]}`, q.fordb]);
      conn.writejson(q.jsoncmd, db.cmd);
	   writeFileSync(`${path}${m.args[1]}/${m.args[0]}.mjs`, m.quoted.text);
      await repl(`Sukses membuat plugin baru pada path ${path}${m.args[1]}/${m.args[0]}.mjs dengan command ${m.args[0]}`)
     conn.restart(m)
   } else {
	   await writeFileSync(`${path}${db.cmd[i][1]}.mjs`, m.quoted.text);
	   await repl(`Sukses tersave di path : ${path + db.cmd[i][1]} dengan command ${db.cmd[i][0]}`);
      conn.restart(m)
   }
};

export default handle;

export let cmd = {
	command: "saveplugin",
	alias: ["sp"],
	catogory: "#owner",
	description: "",
}
