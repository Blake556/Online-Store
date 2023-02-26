const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3009
const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index')
})

app.listen(PORT, function() {
    console.log(`server is live on  ${PORT}`)
})