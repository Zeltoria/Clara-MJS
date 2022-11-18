import { exec } from 'child_process';
import { format } from 'util';
const handle = async (m, { q, bb, conn }) => {
    let cap = `"update hehe ${new Date()*1}"`
	if (!m.isOwn) return
    await conn.sendteks(m.chat, bb('Wait for updating github...'), m)
	exec(`git config --global user.email ${q.emailgh} && git config --global user.name ${q.usernamegh} && git add . && git commit -m ${cap} && git push`, (stderr, stdout) => {
		if (stderr) return conn.sendteks(m.chat, stderr, m);
		if (stdout) return conn.sendteks(m.chat, stdout, m);
	})
}

export default handle;