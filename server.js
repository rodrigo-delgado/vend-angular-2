//this is already setup for heroku
var express = require('express')
var path = require('path')


//Create an App


var index = require('./routes')

const PORT = process.env.PORT || 3000

var app = express()

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)

  } else {
    next()
  }
})
app.use(express.static(path.join(__dirname, 'client')))
app.set('view engine', 'ejs')
app.engine('html',require('ejs').renderFile)

//Static folder

app.use(express.static('public'))

app.use('/', index)

app.listen(PORT, function(){
  console.log('Express server is running on port ' + PORT)
})
