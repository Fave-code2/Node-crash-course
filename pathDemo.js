import path from "path"; // Give utility to work with file path and it doesn't matter of the file is in our structure or not
import url from "url";

const filePath = "./dir1/dir2/test.txt";

// basename() give the base name
console.log(path.basename(filePath));

// dirname
console.log(path.dirname(filePath));

// extname
console.log(path.extname(filePath));

// parse give all of the above in an object
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

// join()
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

// resolve
const filePath3 = path.resolve(__dirname, "dir1", "dir", "test.txt");
console.log(filePath3);
