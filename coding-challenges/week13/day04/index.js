const fs = require("fs");

function search(filename, keyword){
let data = fs.readFileSync(filename, "utf-8")
let lines = data.split("\n")
for(let i=0; i<lines.length; i++){
const line = lines[i];

if(line.indexOf(keyword) != -1) 
return `line: ${i+1} data: ${line}`
}
return "not found"
}
console.log(search("file.txt", "sentence"))