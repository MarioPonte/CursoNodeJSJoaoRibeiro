const express = require("express")

// Create express app
const app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get("/", (req, res) => {
    //res.send("<h1>Teste</h1>")
    res.status(200).sendFile("./views/home.html", { root: __dirname })
})

app.get("/services", (req, res) => {
    res.status(200).sendFile("./views/services.html", { root: __dirname })
})

app.get("/sobre", (req, res) => {
    res.status(200).sendFile("./views/about.html", { root: __dirname })
})

app.get("/acerca", (req, res) => {
    res.status(302).redirect("/sobre")
})

// ejs
app.get("/teste-ejs", (req, res) => {
    res.render('inicio')
})

app.use((req, res) => {
    res.status(404).sendFile("./views/pageNotFound.html", { root: __dirname })
})