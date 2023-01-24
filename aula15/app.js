const fs = require("fs")

const readStream = fs.createReadStream("aula14/dados.txt", { encoding: "utf-8" })
const writeStream = fs.createWriteStream("aula15/output.txt")

readStream.on("data", (dados) => {
    // console.log("##########################################################")
    // console.log(dados)
    writeStream.write("\n=========================================================\n")
    writeStream.write(dados)
})

console.log("terminado")