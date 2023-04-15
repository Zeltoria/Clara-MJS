const handle = {
  say: ["texttophoto", "ttp"],
  category: "#tools",
  describe: "convert your text into photo",
  master: async (m, { q, conn, repl, bot, db }) => {
    if (!m.query) return repl(q.notext);
    conn.sendimg(
      m.chat,
      `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=800&fontsize=500&fillTextType=1&fillTextPattern=Warning!&text=${encodeURIComponent(
        m.query
      )}`,
      `Sukses bng`,
      m
    );
  }
};

export default handle;
