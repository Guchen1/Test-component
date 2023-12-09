import path from "path";
import { rollup } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import terser from "@rollup/plugin-terser";
import vueDefineOptions from "unplugin-vue-define-options/rollup";
import esbuild from "rollup-plugin-esbuild";
import { compRoot, outputEsm, outputCjs, output } from "../utils/paths";
import { target, generateExternal, generatePaths } from "../utils/rollup";
import postcss from "rollup-plugin-postcss";
export const buildModules = async () => {
  // 入口
  const input = [path.resolve(compRoot, "../index.ts")];
  // 编译解析
  const bundle = await rollup({
    input,
    plugins: [
      vueDefineOptions(),
      vue(),
      vueJsx(),
      nodeResolve(),
      esbuild(),
      postcss({
        extensions: [".css"],
      }),
    ],
    treeshake: false,
    external: ["vue", "@vueuse/core"], // 外部模块，所有依赖都设置为外部模块
    output: {
      globals: {
        vue: "Vue",
        "@vueuse/core": "VueUse",
      },
      exports: "named",
    },
  });

  // 输出文件
  await Promise.all([
    bundle.write({
      format: "esm", // 模块格式
      dir: outputEsm, // 输出目录
      exports: 'named', // 导出模式
      preserveModules: true, // 与原始模块创建相同的文件
      preserveModulesRoot: "src",
      sourcemap: true, // 生成 sourcemap
      entryFileNames: `[name].js`, // 生成文件名
    }),
    bundle.write({
      format: "cjs",
      dir: outputCjs,
      exports: "named",
      paths: generatePaths(),
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
      entryFileNames: `[name].js`,
    }),
    bundle.write({
      format: "umd",
      dir: output,
      exports: "named",
      name: "xVue3",
      globals: {
        vue: "Vue",
        "@vueuse/core": "VueUse",
      },
      sourcemap: true, // 生成 sourcemap
      entryFileNames: `x-vue3.js`, // 生成文件名
    }),
    bundle.write({
      format: "umd",
      dir: output,
      exports: "named",
      name: "xVue3",
      globals: {
        vue: "Vue",
        "@vueuse/core": "VueUse",
      },
      sourcemap: true, // 生成 sourcemap
      entryFileNames: `x-vue3.min.js`, // 生成文件名
      plugins: [terser()],
    }),
  ]);
};
