const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3009
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/products', function(req, res) {
    res.render('products')
})

app.get('/cart', function(req, res) {
    res.render('cart')
})

app.listen(PORT, function() {
    console.log(`server is live on  ${PORT}`)
})