const fs = require("fs");
const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html", "utf8");

let ch = cheerio.load(htmlKaData);
let pTagKaData=ch("p").text();
console.log(pTagKaData);
