import fs from "fs";
import path from "path";
import os from "os";

type DeployInfo = {
  commit: string;
  time: string;
};

const DEPLOY_FILE = path.join(process.cwd(), "deploy.json");

function readDeployInfo(): DeployInfo {
  try {
    const raw = fs.readFileSync(DEPLOY_FILE, "utf-8");
    return JSON.parse(raw) as DeployInfo;
  } catch {
    // Not deployed via the script yet (e.g. local dev) — safe placeholder values only.
    return { commit: "dev", time: "n/a" };
  }
}

function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  if (days > 0) return `${days}d ${hours}h`;
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

export function getStatus() {
  const deploy = readDeployInfo();
  return {
    online: true,
    uptime: formatUptime(os.uptime()),
    lastDeployCommit: deploy.commit,
    lastDeployTime: deploy.time,
  };
}
