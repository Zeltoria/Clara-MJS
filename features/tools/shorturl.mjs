import axios from "axios";

const handle = {
  say: ["shorturl", "url", "short"],
  category: "#tools",
  describe: "shorting your long url",
  master: async (m, { q, conn, repl }) => {
    if (!m.args[0]) return repl(`Contoh : .${m.command} https://instagram.com/iqblsh77`);
    if (!/^https?:\/\//.test(m.args[0])) return repl(`Masukan URL yang valid!!!`);
    let { data } = await axios.get(`https://api.akuari.my.id/short/tinyurl?link=${m.args[0]}`);
    repl(`Url Short : ${data.hasil}\nUrl Asli : ${m.args[0]}\n\nShort url by tinyurl`);
  }
};

export default handle;
