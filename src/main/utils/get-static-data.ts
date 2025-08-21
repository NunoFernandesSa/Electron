import os from "os";
import osUtils from "os-utils";
import { getStorageData } from "./get-storage-data.js";

export function getStaticData() {
  const totalStorage: number = getStorageData().total;
  const cpuModel: string = os.cpus()[0].model;
  const totalRamMemoryGB: number = Math.floor(osUtils.totalmem() / 1024);
  return {
    totalStorage,
    cpuModel,
    totalRamMemoryGB,
  };
}
