const http = require('http');

server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write(`${req.method} ${req.url} HTTP/${req.httpVersion}\n`);
  for (i=0; i<req.rawHeaders.length; i+=2)
    res.write(`${req.rawHeaders[i]}: ${req.rawHeaders[i+1]}\n`);
  res.write('\n');
  req.on('data', msg => res.write(msg));
  req.on('end', () => res.end());
}).listen(5000);
