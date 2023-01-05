const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((request,response) => {
    response.end("O servidor NodeJS");
}).listen(port, host, () => {
    console.log("Servidor em execução, hehehe");
});