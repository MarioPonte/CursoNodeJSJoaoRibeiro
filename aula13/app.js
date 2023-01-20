const fs = require("fs")

if(!fs.existsSync("./aula13/dados1.txt")) console.log("File not exist")
else fs.rm("aula13/dados1.txt", (err) => { if(err) console.log(err); else console.log("File was been deleted"); })