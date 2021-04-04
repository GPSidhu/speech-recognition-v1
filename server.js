const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('index.html').pipe(res)
    }  else if (req.url === '/index.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        fs.createReadStream('index.js').pipe(res)
    }
});
server.listen(3001);

console.log('Listening on 3001...');