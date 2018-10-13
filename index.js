/*
  http --> using ES5
*/
// ES5
var http = require('http')
var fs = require('fs')

// 创建 Server
var myServer = http.createServer(function(request, response) {
  console.log('I am server!')
  console.log(request.url)
  // check request
  switch (request.url) {
    case '/1.html':
      response.write('1.html')
      break
    default:
      response.write('404')
      break
  }

  // end sending response
  response.end()
})

// 监听
myServer.listen(8082) // $param --> port number

// 返回 response

// read file
/* 
fs.readFile(filename, callback() {})

*/
