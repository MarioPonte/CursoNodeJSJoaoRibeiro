const http = require('http');
const fs = require("fs")

const server = http.createServer((req,res) => {

    // Header
    res.setHeader("Content-Type","text/html")

    // HTML Content
    fs.readFile("./aula18/html_pages/index.html", (err,data) => {
        if(err){
            console.log("aconteceu um erro:" + err)
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })

}).listen(3000, "localhost", () => {
    console.log("Servidor em execução");
});