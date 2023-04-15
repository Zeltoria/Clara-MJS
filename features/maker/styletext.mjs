import axios from "axios";
import cheerio from "cheerio";
import { format } from "util";

const handle = {
  say: ["styletext"],
  category: "#maker",
  describe: "text maker font",
  master: async (m, { q, conn, repl }) => {
    if (!m.query) return repl("Masukan teks yg akan di styling");
    const res = await styling(m.query);
    conn.sendlist(
      m.chat,
      `Berikut adalah style ysng tersedia di dalam sini, klik list nya lalu salin pesan anda sendiri`,
      q.name,
      res.map(({ result }) => [result, ".", ""]),
      m
    );
  }
};

export default handle;

function styling(q) {
  return new Promise((resolve, reject) => {
    axios("http://qaz.wtf/u/convert.cgi?text=" + q)
      .then((data) => {
        let $ = cheerio.load(data);
        let hasil = [];
        $("table > tbody > tr").each(function (a, b) {
          hasil.push({
            name: $(b).find("td:nth-child(1) > span").text(),
            result: $(b).find("td:nth-child(2)").text().trim()
          });
        });
        resolve(hasil);
      })
      .catch((e) => reject(e));
  });
}
