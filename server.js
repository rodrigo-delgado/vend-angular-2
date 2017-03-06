var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var index = require('./routes')

var port = 3000

var app = express()

//View engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html',require('ejs').renderFile)

//Static folder
app.use(express.static(path.join(__dirname, 'client')))

//Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: false}))

app.use('/', index)

app.listen(port, () => {
  console.log(`server started on on port ${port}`)
})
