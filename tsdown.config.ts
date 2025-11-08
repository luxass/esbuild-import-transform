import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "src/index.ts",
  ],
  treeshake: true,
  publint: true,
  exports: true,
  dts: true,
  format: ["cjs", "esm"],
});
