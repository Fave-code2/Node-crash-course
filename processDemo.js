// argv
console.log(process.argv);

// process.env
console.log(process.env.LOGNAME);

// pid
console.log(process.pid);

// cwd give the current working directory
// console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

// exit()

process.on("exit", (code) => {
  console.log("About to exit with code: " + code);
});

process.exit(0);

console.log("Process exit successful");
