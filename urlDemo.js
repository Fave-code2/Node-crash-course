import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// url Object
const urlObj = new URL(urlString);

console.log(urlObj);

// format() converts the obj back to a string
console.log(url.format(urlObj));

// import.meta.url
console.log(import.meta.url);

// fileURLToPath() converts to a regular path.
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get("q"));
params.append("limit", "5");
params.delete("limit");
console.log(params);
