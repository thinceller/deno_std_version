import { fetchStdVersion } from "./mod.ts";

const process = Deno.run({
  cmd: ["deno", "--version"],
  stdout: "piped",
  stderr: "piped",
});
const output = await process.output();
process.close();

const outStr = new TextDecoder().decode(output);
const denoVersion = outStr.split(" ")[1];

const stdVersion = await fetchStdVersion(denoVersion);

const msg = `Deno: v${denoVersion}
deno_std: ${stdVersion}`;
console.log(msg);

Deno.exit(0);
