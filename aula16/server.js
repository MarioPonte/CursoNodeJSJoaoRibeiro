const http = require('http');

const server = http.createServer((req,res) => {
    console.log("resposta");
}).listen(3000, "localhost", () => {
    console.log("Servidor em execução");
});