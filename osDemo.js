import os from "os";

// userInfo() give info the system current user
// console.log(os.userInfo());

// // Methods that deals with memory
// // totalmem()

// console.log(os.totalmem());

// // freemem()
// console.log(os.freemem());

// // cpus
// console.log(os.cpus());

// console.log(os.platform());

console.log(os.arch());

console.log(os.hostname());

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU cores:", os.cpus().length);
console.log("Total memory:", `${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`);
console.log("Free memory:", `${(os.freemem() / 1024 ** 3).toFixed(2)} GB`);
console.log("Home directory:", os.homedir());
console.log("Hostname:", os.hostname());
console.log("Temp directory:", os.tmpdir());
