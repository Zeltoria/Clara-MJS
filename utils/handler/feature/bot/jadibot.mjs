const { default: A, DisconnectReason, useMultiFileAuthState } = (await import('baileys')).default;
import ws from 'ws';
import qrcd from 'qrcode';
import { configConnectionJadibot, store } from '../../../config-connection.js';
import msgUp from '../../msg-upsert.js';

const bebek = async (m, u, a, q, g, p) => {
	let { lastDisconnect, connection, qr } = u
	if (qr) {
		let scanner = await a.sendimgbuf(m.chat, Buffer.from((await qrcd.toDataURL(qr, { scale: 8 })).split(',')[1], 'base64'), `Silahkan Scan QR Code ini!!!\nWaktu scan Cuma ${q.longqr/1000} detik...\n\nQR akan berhenti dengan sendiri jika tidak ada yang tersambung!!!`, m);
		setTimeout(async () => {
			await a.sendMessage(m.chat, { delete: scanner.key });
		}, q.longqr);
	}
	if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && a.ws.readyState !== ws.CONNECTING) {
		p(g, a, q, m, false)
		a.sendteks(m.chat, `Jadi bot berhenti...\nKarena tidak ada yg tersambung...`, m)
	}else if (connection == 'open') {
		a.sendteks(m.chat, `@${m.sender.split('@')[0]} Telah tersambung ke server ${q.name}....`, m);
		jadibott = 0
	} else if (connection == 'close') {
		a.sendteks(g, `Koneksi terputus!!!\nTunggu sedang menyambungkan ulang!!!`, m);
	}
}

const conn2 = async (user, conn, q, m, event) => {
	let folder = `TMP/jadibot-${user}`
	const { state, saveCreds } = await useMultiFileAuthState(folder);
	const c = A(Object.assign(configConnectionJadibot, { auth: state }));
	store.bind(c.ev);
	if (event == true) {
		c.ev.on('connection.update', async (u) => bebek(m, u, conn, q, user, conn2));
		c.ev.on('messages.upsert', async (u) => msgUp(u, c, store));
		c.ev.on('creds.update', saveCreds);
	} else {
 		c.ev.off('connection.update', async (u) => bebek(m, u, conn, q, user, conn2));
		c.ev.off('messages.upsert', async (u) => msgUp(u, c, store));
		c.ev.off('creds.update', saveCreds);
	}
}

const handle = async(m, { q, conn }) => {
    if (!m.isOwn) return conn.sendteks(m.chat, q.owner, m);
	let user = m.sender
    conn.jadibot = conn.jadibot ? conn.jadibot : {}
    conn.jadibot[user] = [
		await conn.sendteks(m.chat, `Tunggu sebentar!!!\nSedang meload QR code`, m),
		conn2(user, conn, q, m, true)
	]
}

export default handle;