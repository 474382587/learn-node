var http = require('http')
var fs = require('fs')
var queryString = require('querystring')
var urlLib = require('url')
var users = {
      user1: 'password1'
    }
var server = http.createServer(function(req, res) {
  var str = ''
  
  req.on('data', function(data) {
    str += data
  })
  req.on('end', function() {
    var obj = urlLib.parse(req.url, true)
    const url = obj.pathname
    console.log(obj)
    const GET = obj.query
    const POST = queryString.parse(str)

    
    if (url === './user') {
      switch (GET.act) {
        case 'reg':
          if (users[GET.user]) {
            res.write('{"ok": false, "msg": username has been taken!}')
          } else {
            // store username and password to json
            users[GET.user] = GET.pass
            res.write('{"ok": true, "msg": Registration Success!}')
          }
          break
        case 'login':
          if (!users[GET.name]) {
            res.write('{"ok": false, "msg": User not exist!}')
          } else if (users[GET.user] != GET.pass) {
            res.write('{"ok": false, "msg": Wrong password!}')
          }
          else {
            res.write('{"ok": true, "msg": Login Success!}')
          }
          break
        default:
          res.write('{"ok": false, "msg": "unknown action!"}')
          break
      }
      res.end()
    } else {
      // read
      var fileName = './' + url
      console.log(fileName)
      fs.readFile(fileName, function(err, data) {
        if (err) {
          res.write('404')
        } else {
          res.write(data)
        }

        res.end()
      })
    }
  })
})


server.listen(8082)