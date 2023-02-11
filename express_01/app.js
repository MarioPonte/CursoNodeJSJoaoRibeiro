const express = require("express")

// Create express app
const app = express()

app.listen(3000)

app.get("/", (req, res) => {
    //res.send("<h1>Teste</h1>")
    res.sendFile("./views/home.html", { root: __dirname })
})

app.get("/sobre", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname })
})