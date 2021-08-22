# deno_std_version
Get the version of deno_std associated with Deno version.

## Usage

### CLI
#### Installation
```
$ deno install --allow-run --allow-net https://deno.land/x/deno_std_version@0.1.0/deno_std_version.ts
```

```
$ deno --version
deno 1.13.1 (release, aarch64-apple-darwin)
v8 9.3.345.11
typescript 4.3.5

$ deno_std_version
Deno: v1.13.1
deno_std: 0.105.0

```

### module
```typescript
import { fetchStdVersion } from "https://deno.land/x/deno_std_version@0.1.0/mod.ts";

const denoVersion = "1.13.1";
const stdVersion = await fetchStdVersion(denoVersion);

// 0.105.0
console.log(stdVersion);
```
