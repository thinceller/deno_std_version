export async function fetchStdVersion(denoVersion: string): Promise<string> {
  const res = await fetch(
    "https://raw.githubusercontent.com/denoland/deno_website2/main/versions.json",
  );
  const data: { [k: string]: { [k: string]: string } } = await res.json();
  const stdVersion = data["cli_to_std"][`v${denoVersion}`];

  return stdVersion;
}
