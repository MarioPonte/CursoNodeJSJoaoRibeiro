const express = require("express")

// Create express app
const app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get("/", (req, res) => {
    res.render('home', { title:"Home", subtitle:"My home" })
})

app.get("/services", (req, res) => {

    const services = [
        { titulo_servico: "Desenvolvimento web", descricao: "É bom" },
        { titulo_servico: "Desenvolvimento Desktop", descricao: "É para apps de desktop" },
        { titulo_servico: "Desenvolvimento Mobile", descricao: "React native" },
    ];

    res.render('services', { title:"Services", services })
})

app.get("/about", (req, res) => {
    res.render('about', { title:"About" })
})

app.use((req, res) => {
    res.status(404).render('pageNotFound', { title:"Error" })
})