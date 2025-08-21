import { getCpuUsage } from "./utils/get-cpu.js";
import { getRamUsage } from "./utils/get-ram.js";
import { getStaticData } from "./utils/get-static-data.js";
import { getStorageData } from "./utils/get-storage-data.js";

const POLLING_INTERVAL = 500; // in milliseconds

export function pollResources() {
  setInterval(async (): Promise<void> => {
    const cpuUsage: number = await getCpuUsage();
    const ramUsage: number = getRamUsage();
    const storageData = getStorageData();
    const staticData = getStaticData();

    console.log({
      cpuUsage,
      ramUsage,
      storageUsage: storageData.usage,
      cpuModel: staticData.cpuModel,
      storageTotal: `${staticData.totalStorage}GB`,
      totalMemory: `${staticData.totalRamMemoryGB}GB`,
    });
  }, POLLING_INTERVAL);
}
