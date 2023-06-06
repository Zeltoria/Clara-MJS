import axios from "axios";

const handle = {
  say: ["openai", "ai", "clara"],
  category: "#bot",
  describe: "Fitur Yang Akan Sangat Membantu",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Mau Nanya Apa?`
      );
    const { data } = await axios(`https://api.ibeng.tech/api/info/gpt3?text=${m.args[0]}&apikey=APIKEY`);
    conn.sendMessage(m.chat, { text: `${data.data.data}` }, { quoted: m })
  }
}

export default handle;