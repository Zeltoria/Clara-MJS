import axios from "axios";

const handle = {
  say: ["tiktokstalk", "stalktiktok"],
  category: "#internet",
  describe: "Fitur Untuk Mendapat Informasi Tiktok Seseorang",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan Usernamenya, Contoh: .tiktokstalk devilzmd`
      );
    const { data } = await axios.get(`https://api.alyachan.my.id/api/ttstalk?user=${m.args[0]}`);
    let anu = data.data
    conn.sendMessage(m.chat, { image: { url: anu.users.avatar }, caption: `Username: ${anu.users.username}\nNickname: ${anu.users.nickname}\nSignature: ${anu.users.signature}\nVerified: ${anu.users.verified}\nRegion: ${anu.users.region}\nFollowing: ${anu.stats.followingCount}\nFollower: ${anu.stats.followerCount}\nLove: ${anu.stats.heartCount}\nVideo: ${anu.stats.videoCount}`}, { quoted: m })
  }
}

export default handle