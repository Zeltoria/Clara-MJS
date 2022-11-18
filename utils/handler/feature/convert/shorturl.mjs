import fetch from 'node-fetch';

const handle = async (m, { q, conn }) => {
	let res = (await fetch('https://tinyurl.com/api-create.php?url=' + m.args[0])).text();
	// lagi gak mood :(
}

export default handle;