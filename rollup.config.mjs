import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/my-library.js",
      format: "es",
    },
    plugins: [typescript(), terser()],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/my-library.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
