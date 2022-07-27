const express = require('express')
const app = express()
app.use(express.static('skeleton'))
app.use(express.static('func'))
app.use(express.static('styles'))
app.get('/', (req, res) => {
    console.log('helow')
    res.render(index.html)
})
app.get('/favicon.ico', (req, res) => {
    console.log('favivon')
})
app.listen(3000, () => {
    console.log('succefully running server')
})