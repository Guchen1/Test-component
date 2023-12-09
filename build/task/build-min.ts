import { minify } from "terser";
import { readFile, writeFile } from "fs/promises";
import { root } from "../utils/paths";

export const buildMin = async () => {
  const content = await readFile(root + "/dist/x-vue3.js", "utf-8");
  const result = await minify(content, {
    compress: {
      drop_console: true,
    },
  });
  await writeFile(root + "/dist/x-vue3.min.js", result.code as string);
};
