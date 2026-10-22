import { readdirSync } from "fs";
import { join } from "path";
import os from "os";

export default function ServerComponentDemo() {
  const lab3Dir = join(process.cwd(), "app", "labs", "lab3");
  let files: string[];
  try {
    files = readdirSync(lab3Dir).filter((f) => f.endsWith(".tsx")).slice(0, 8);
  } catch {
    files = readdirSync(process.cwd()).slice(0, 8);
  }
  const serverInfo = {
    platform: os.platform(),
    arch: os.arch(),
    nodeVersion: process.version,
    cpus: os.cpus().length,
  };
  return (
    <div id="wd-server-component">
      <h4>Server Component</h4>
      <h5>Files read on the server</h5>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      <h5>Server Information</h5>
      <pre>{JSON.stringify(serverInfo, null, 2)}</pre>
    </div>
  );
}
