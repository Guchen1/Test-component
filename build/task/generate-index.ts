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
    fs.writeFileSync(path.resolve(root, `es/index.ts`), indexContent);
};
