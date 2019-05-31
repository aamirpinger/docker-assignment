const express = require("express")
const fs = require("fs")

const app = express()

const port = 5000

app.set('view engine', "hbs")

app.get('/', (req, res) => {
    let data = []
    const fileExist = fs.existsSync("/data/time.txt")
    if (fileExist) {
        const fileData = fs.readFileSync("/data/time.txt").toString()

        data = JSON.parse(fileData)
    }
    res.render("index", {
        data,
        name: process.env.CREATEDBY
    })
})

app.listen(port, () => {
    console.log("Client App started listening at port ", port)
})



