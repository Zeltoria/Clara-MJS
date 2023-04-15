import axios from "axios";
import { toUrl } from "../../utils/lib/convert.media.lib.mjs";

const handle = {
  say: ["removebg", "removebackground", "deletebackground"],
  category: "#tools",
  describe: "used to remove background image",
  master: async (m, { q, conn, d, quoted, mime, repl }) => {
    let i = `reply foto / kirim foto dengan caption .${m.command}`;
    if (!/image\/(jpe?g|png)/.test(mime)) return repl(i);
    let dl = await quoted.download();
    let pk = await toUrl(dl),
      { data } = await axios.get(`${q.akuari}/other/removebg?link=${pk}`);
    conn.sendimg(m.chat, data.hasil, `Sukses bng`, m);
  }
};

export default handle;
