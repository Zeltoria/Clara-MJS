import { performance } from "perf_hooks";

const handle = {
  say: ["ping", "p"],
  category: "#bot",
  describe: "Mendeteksi Jaringan Atau Kecepatan Sistem",
  master: async (m, { q, d, conn, repl }) => {
    let selisih2 = await performance.now();
    let selisih1 = await performance.now();
    repl(`Kecepatan Respons: ${(selisih1 - selisih2).toFixed(3)} Milisecond`);
  }
};

export default handle;
