import configs from "../../Setting/settings.mjs";
import baileys from "baileys";
import pino from "pino";

const logger = pino({ level: "silent" });
const store = baileys.makeInMemoryStore({ logger });

const configConnectionDefault = {
  browser: configs.browser, // Browser from config
  syncFullHistory: false, // mematikan sinkoniasi riwayat history
  printQRInTerminal: true, // QR terminal
  logger, // Pino String query
  qrTimeout: configs.longqr, // Long qr time out from config
  generateHighQualityLinkPreview: true, // Biar Hd
  markOnlineOnConnect: true, // ONLINE KETIKA TERKONEKSI
  //getMessage: async () => { return { conversation: 'Maaf Bot sedang tidak ingin merespon!!\nTunggu sebentar mereload pesan!!!' } },
  patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadataVersion: 2,
              deviceListMetadata: {}
            },
            ...message
          }
        }
      };
    }

    return message;
  }
};

const configConnectionJadibot = {
  printQRInTerminal: false,
  markOnlineOnConnect: true,
  syncFullHistory: false,
  qrTimeout: configs.longqr,
  logger,
  patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadataVersion: 2,
              deviceListMetadata: {}
            },
            ...message
          }
        }
      };
    }

    return message;
  }
};

export default configConnectionDefault;
export { configConnectionJadibot, store, logger };
