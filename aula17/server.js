const http = require('http');

const server = http.createServer((req,res) => {

    // Header
    res.setHeader("Content-Type","text/html")

    res.write('<head><link rel="stylesheet" type="text/css" href="style.css"></head>')

    res.write("<h1>teste</h1>")
    res.write("<h2>teste</h2>")
    res.write("<h3>teste</h3>")
    res.end();
}).listen(3000, "localhost", () => {
    console.log("Servidor em execução");
});