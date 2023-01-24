const fs = require("fs")

const writeStream = fs.createWriteStream("aula15/output.txt", { encoding: "utf-8" })

writeStream.write("O meu texto.\n")