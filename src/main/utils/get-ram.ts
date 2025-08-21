import osUtils from "os-utils";

export function getRamUsage() {
  return 1 - osUtils.freememPercentage();
}
