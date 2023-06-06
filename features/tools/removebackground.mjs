import axios from "axios";
import { toUrl } from "../../utils/lib/convert.media.lib.mjs";

const handle = {
  say: ["removebg", "removebackground", "deletebackground"],
  category: "#tools",
  describe: "Menghilangkan Background",
  master: async (m, { q, conn, d, quoted, mime, repl }) => {
    let i = `Reply Atau Kirim Foto Dengan Caption .${m.command}`;
    if (!/image\/(jpe?g|png)/.test(mime)) return repl(i);
    let dl = await quoted.download();
    let pk = await toUrl(dl),
      { data } = await axios.get(`${q.akuari}/other/removebg?link=${pk}`);
    conn.sendimg(m.chat, data.hasil, `Sukses Kak`, m);
  }
};

export default handle;
