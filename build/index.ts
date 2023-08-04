import { series } from "gulp";
import { parallel } from "gulp";
import { buildModules } from "./task/build-modules";
import { generateTypes } from "./task/generate-types";
import { generateIndex } from "./task/generate-index";
import { clean } from "./task/clean";

export default series(clean,parallel(buildModules,generateTypes));