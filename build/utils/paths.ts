import { resolve } from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// root
export const root = resolve(__dirname, "..", "..");
export const compRoot = resolve(root, "src");

// output
export const output = resolve(root, "dist");
export const outputEsm = resolve(root, "es");
export const outputCjs = resolve(root, "lib");

// package
export const compPackage = resolve(root, "package.json");
