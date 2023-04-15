process.on("uncaughtException", console.error); // MEMAKSA TETAP HIDUP WALAU ERROR
import baileys, { useMultiFileAuthState } from "baileys";
import { accessSync, writeFileSync } from "fs";
import { join } from "path";

import configConnectionDefault, { store } from "./utils/lib/config.connection.lib.mjs";
import messagesUpsertHandler from "./utils/handler/messages.upsert.handler.mjs";
import simpleDeclarationsLib from "./utils/lib/simple.declarations.lib.mjs";
import connectionUpdateLib from "./utils/lib/connection.update.lib.mjs";
import prototypeHelper from "./utils/helper/prototype.mjs";
import initDatabase from "./utils/db/database.mjs";
import { _ } from "./utils/lib/logger.lib.mjs";
import configs from "./Setting/settings.mjs";

/*
 * @param
 * @returns
 * Created By https://github.com/bolaxd/
 */

async function main() {
  try {
    const { state, saveCreds } = await useMultiFileAuthState(configs.session);
    const chat = baileys.default(Object.assign(configConnectionDefault, { auth: state }));
    store.bind(chat.ev);
    simpleDeclarationsLib(chat);
    try {
      accessSync(join(configs.session, "app_run.txt"));
    } catch (e) {
      writeFileSync(join(configs.session, "app_run.txt"), JSON.stringify(Date.now(), null, 2));
    }
    // Menangani koneksi
    chat.ev.on("connection.update", async (iqbal) => connectionUpdateLib(iqbal, chat, main));
    // Menangani acara { pesan, update }
    chat.ev.on("messages.upsert", async (iqbal) => messagesUpsertHandler(iqbal, chat, store, configs));
    // Simpan credensial login
    chat.ev.on("creds.update", saveCreds);
    return chat;
  } catch (e) {
    console.log(e);
  }
}
prototypeHelper();
initDatabase();
console.log(_.p());
main();
