import path from "path";
import fs from "fs";
import { root } from "../utils/paths";

export  const generateIndex =async () => {
    const indexContent = `import install from './src'
export default install
export * from './src'`;
    // 如果不存在es文件夹，就创建一个
    if (!fs.existsSync(path.resolve(root, `es`))) {
        fs.mkdirSync(path.resolve(root, `es`));
    }
    // 写入index.ts文件
    fs.writeFileSync(path.resolve(root, `es/index.js`), indexContent);
    // 如果不存在lib文件夹，就创建一个
    if (!fs.existsSync(path.resolve(root, `lib`))) {
        fs.mkdirSync(path.resolve(root, `lib`));
    }
    const indexContent2 = `const install = require('./src')
module.exports = install
module.exports.default = install
module.exports.__esModule = true
module.exports.install = install
module.exports.default.install = install`;

    // 写入index.ts文件
    fs.writeFileSync(path.resolve(root, `lib/index.js`), indexContent2);
};

