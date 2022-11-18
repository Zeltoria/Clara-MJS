const handle = async (m, { q, conn, userAfk, getpp }) => {
	let alasan = m.query ? m.query : ' Tanpa Alasan ';
	let date = new Date() * 1;
	userAfk.set(m.sender, [date, alasan, true])
	conn.sendteks(m.chat, `Kamu Telah afk dengan alasan ${alasan}`, m);
};

export default handle;