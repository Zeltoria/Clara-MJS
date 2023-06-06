import axios from "axios";

const handle = {
  say: ["igstalk", "stalkig"],
  category: "#internet",
  describe: "Fitur Untuk Mendapat Informasi Instagram Seseorang",
  master: async (m, { q, conn, d, repl }) => {
    if (!m.args[0])
      return repl(
        `Masukan Usernamenya, Contoh: .igstalk danilelistz02`
      );
    const { data } = await axios.get(`https://api.alyachan.my.id/api/igstalk?user=${m.args[0]}`);
    let anu = data.data
    conn.sendMessage(m.chat, { image: { url: anu.profile_pic_url }, caption: `Nama Lengkap: ${anu.full_name}\nUsername: ${anu.username}\nID: ${anu.id}\nProfile Private: ${anu.is_private}\nBio: ${anu.biography}\nTimeline: ${anu.edge_owner_to_timeline_media.count}\nFollowing: ${anu.edge_follow.count}\nFollower: ${anu.edge_followed_by.count}`}, { quoted: m })
  }
}

export default handle;