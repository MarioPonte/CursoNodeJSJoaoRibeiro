const express = require("express")

// Create express app
const app = express()

app.listen(3000)

app.get("/", (req, res) => {
    res.send("<h1>Teste</h1>")
})

app.get("/sobre", (req, res) => {
    res.send("<h1>Sobre</h1>")
})