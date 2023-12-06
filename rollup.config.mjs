import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.tsx",
    output: {
      file: "dist/index.js",
      format: "es",
      exports: "named",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external({ includeDependencies: true }),
      resolve(),
      terser(),
      typescript(),
    ],
  },
];
