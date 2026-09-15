// import fs from "fs";
import fs from "fs/promises";

// readfile() - callback async version
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // readfileSync sync version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

// readfile() - promise .then()
// fs.readFile("./test.txt", "utf8")
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// readfile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Write file, writes to a file and if the file doesn't exist it, it'll create it, and if there is already some thing in it, it overrides it.

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "We are going to make it");
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};

// appendFile() used to add to an existing file.

const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nWith the help of God");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
