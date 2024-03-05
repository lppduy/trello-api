const express = require('express')
const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
  res.send('<h1>LPPDUY IS KING</h1>')
})

app.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}/`)
})