import { toUrl } from "../../utils/lib/convert.media.lib.mjs";
const handle = {
  say: ["imgtourl", "url", "tourl"],
  category: "#tools",
  describe: "to convert image to url",
  master: async (m, { q, conn, quoted, mime, repl }) => {
    if (!/image/.test(mime)) return repl("Upload lah gambar!");
    let dl = await quoted.download();
    let res = await toUrl(dl);
    repl(res);
  }
};

export default handle;
