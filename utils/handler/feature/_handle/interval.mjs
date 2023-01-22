const handle = async (m, { q, conn, db, d }) => {
	setInterval(function() {
		db.users.map(v => {
			if (v[1] && v[1].premium > 0 && (Date.now() > v[1].premium) && v[1].remindprem) {
				conn.sendteks(v[0], `Penggunaan kartu premium bot ini anda sudah habis!\nTerimakasih telah berlangganan di bot kami`, d.f1(`Premium Expired Reminder`, ''))
				v[1].remindprem = false
			}
		})
	}, 1000);
}

export default handle;