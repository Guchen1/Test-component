import path from "path";
import { rollup } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDefineOptions from "unplugin-vue-define-options/rollup";
import esbuild from "rollup-plugin-esbuild";
import { compRoot, outputEsm, outputCjs } from "../utils/paths";
import { target, generateExternal, generatePaths } from "../utils/rollup";
import postcss from 'rollup-plugin-postcss'
export const buildModules = async () => {
  // 入口
  console.log(path.resolve(compRoot, "index.ts"));
  const input = [path.resolve(compRoot, "index.ts")];
  console.log('success');
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
        extensions: ['.css']
    })
    ],
    treeshake: false,
    external: generateExternal({ full: true }), // 外部模块，所有依赖都设置为外部模块
  });

  // 输出文件
  await Promise.all([
    bundle.write({
      format: "esm", // 模块格式
      dir: outputEsm, // 输出目录
      exports: undefined, // 导出模式
      preserveModules: true, // 与原始模块创建相同的文件
      preserveModulesRoot: "src",
      sourcemap: true, // 生成 sourcemap
      entryFileNames: `[name].mjs`, // 生成文件名
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
  ]);
};
