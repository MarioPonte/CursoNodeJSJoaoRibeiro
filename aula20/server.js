const http = require('http');
const fs = require("fs")

const server = http.createServer((req,res) => {

    // Header
    res.setHeader("Content-Type","text/html")

    // router system
    let htmlFile = "";
    switch (req.url) {
        case "/":
            htmlFile = "./aula20/views/index.html";
            res.statusCode = 200;
            break;
        case "/about":
            htmlFile = "./aula20/views/about.html";
            res.statusCode = 200;
            break;
        default:
            htmlFile = "./aula20/views/error404.html";
            res.statusCode = 404;
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