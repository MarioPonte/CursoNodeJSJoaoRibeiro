const http = require('http');
const fs = require("fs")

const server = http.createServer((req,res) => {

    // Header
    res.setHeader("Content-Type","text/html")

    // router system
    let htmlFile = "";
    switch (req.url) {
        case "/":
            htmlFile = "./aula19/views/index.html";
            break;
        case "/about":
            htmlFile = "./aula19/views/about.html";
            break;
        default:
            htmlFile = "./aula19/views/error404.html";
            break;
    }

    // HTML Content
    fs.readFile(htmlFile, (err,data) => {
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