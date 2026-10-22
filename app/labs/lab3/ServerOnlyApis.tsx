import os from "os";

export default function ServerOnlyApis() {
  return (
    <div id="wd-server-only-apis">
      <h4>More Server-Only APIs</h4>
      <p>NODE_ENV: {process.env.NODE_ENV}</p>
      <p>Server uptime (s): {Math.round(os.uptime())}</p>
      <hr />
    </div>
  );
}
