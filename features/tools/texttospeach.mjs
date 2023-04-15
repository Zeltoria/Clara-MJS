import axios from "axios";

const handle = {
  say: ["texttovoice", "texttospeach", "tts", "ttv"],
  category: "#tools",
  describe: "convert your text into google voice",
  master: async (m, { q, conn, repl }) => {
    if (!m.query) return repl(q.notext);
    let teks = encodeURIComponent(m.query),
      { data } = await axios.get(`${q.akuari}/texttovoice/texttosound_id?query=${teks}`);
    conn.sendMessage(m.chat, { audio: await q.getbuff(data.result), mimetype: "audio/mp4" }, { quoted: m });
  }
};

export default handle;
