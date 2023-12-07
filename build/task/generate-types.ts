import { execa } from "execa";
import gulp from "gulp";
import { root, outputEsm, outputCjs } from "../utils/paths";

export const generateTypes = async () => {
  console.log(root);
  await execa("vue-tsc", ["-p", "tsconfig.declaration.json","--jsx",'preserve'], {
    cwd: root,
  });

  return gulp.src(`${outputEsm}/**/*.d.ts`).pipe(gulp.dest(`${outputCjs}`));
};