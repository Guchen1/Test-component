import gulp from "gulp";
import { buildModules } from "./task/build-modules";
import { generateTypes } from "./task/generate-types";


import { clean } from "./task/clean";

export default gulp.series(clean,gulp.parallel(buildModules,generateTypes));