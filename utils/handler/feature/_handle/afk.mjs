
const handle = async(m, { up, q, d, conn, isBotAdmin, isAdmin, budy, userAfk }) => {
	// REPLY
	const rep = async (teks) => await conn.sendteks(m.chat, teks, d.f1('Notifikasi Keamanan Group', ''))
	// DELETE
	const del = async () => await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender} });
	// KICK
	const kik = async () => await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
	let user = userAfk.get(m.sender)
 	if (user[2] == true) {
    conn.sendteks(m.chat,`Kamu berhenti afk...\nSetelah alasan : ${user[1]}\nSelama : ${q.time(new Date()*1- user[0])}`, m);
	userAfk.set(m.sender, [0,null,false])}
	try {
		let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : []), ...(m.react ? [m.rtarget] : [])])]
		for (let u of jids) {
			let user = userAfk.get(u);
			if (!user) continue
			if (!user[0] || user[0] < 0) continue
			if (m.fromMe) continue
			conn.sendteks(m.chat, `Ssstt ${m.react ? '@'+m.sender.split('@')[0] : ''}, orang nya sedang afk...\n Kamu jangan tag dia!!!\nJangan react Dia!!!\nJangan Reply Dia!!!\nDia afk sejak : ${q.time(new Date - user[0])} yang lalu\nDengan alasan : ${user[1]}`, m, {mentions: [m.sender]})
		}
	} catch (e) {
		conn.sendteks(m.chat, e, m)
	}
};

export default handle;