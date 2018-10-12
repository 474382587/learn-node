var express = require('express')

var server = express()

server.use('/', function(req, res) {
  res.send('123')
  res.end()
})
server.use('/haha.html', function(req, res) {
  res.send('hahahahaha')
  res.end()
})
server.listen(8082)
