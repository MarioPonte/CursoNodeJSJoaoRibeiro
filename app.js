const express = require("express")

// Create express app
const app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get("/", (req, res) => {
    res.render('home', { title:"Home" })
})

app.get("/services", (req, res) => {
    res.render('services', { title:"Services" })
})

app.get("/about", (req, res) => {
    res.render('about', { title:"About" })
})

app.use((req, res) => {
    res.status(404).render('pageNotFound', { title:"Error" })
})