const http = require('http')
const url = require('url')
const fs = require('fs')
const request = require('request')
http.createServer((req,res) => {
    "use strict";
    const pathname = url.parse(req.url).pathname
    const params = url.parse(req.url, true).query
    const isStatic = isStaticRequest(pathname)
    if(isStatic){
        try {
            var data = fs.readFileSync('./page/' + pathname)
            res.writeHead(200)
            res.write(data)
            res.end()
        }catch (e){
            res.writeHead(404)
            res.write('<html><body><h1>404 Not Found</h1></body></html>')
            res.end()
        }
    }else {
        if(pathname == '/chat'){
            var data = {
                "reqType":0,
                "perception": {
                    "inputText": {
                        "text": params.text
                    }
                },
                "userInfo": {
                    "apiKey": "5eb637051e104fec96a99fcad3d0a89b",
                    "userId": "357769"
                }
            }
            var content = JSON.stringify(data)
            request({
                url: 'http://openapi.tuling123.com/openapi/api/v2',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: content
            },function (err,resp,body) {
                if(!err && resp.statusCode == 200){
                    const obj = JSON.parse(body)
                    if(obj && obj.results && obj.results.length > 0 && obj.results[0]){
                        var head = {"Access-Control-Allow-Origin":"*","Access-Control-Allow_headers":"x-requested-with,content-type"}
                        res.writeHead(200,head)
                        res.write(JSON.stringify(obj.results[0].values))
                        res.end()
                    }
                }else {
                    res.write('{"text":"不知道你说的啥"}')
                    res.end()
                }
            })
        }


    }

}).listen(12306)
function isStaticRequest(pathname) {
    const statics = ['.html','.css','.js','.jpg','.png']
    for(let i = 0; i < statics.length; i ++){
        if(pathname.indexOf(statics[i]) == pathname.length - statics[i].length){
            return true
        }
    }
    return false
}