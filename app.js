const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // Lệnh này làm cho thoát khỏi event loop nên sẽ stop server luôn

  res.setHeader('Content-type', 'text/html'); // Set để client nhận biết đây là tài liệu html
  res.write(`
    <html>
      <head>
        <title>cc</title>
      </head>
      <body>
        Body
      </body>
    </html>
  `)
  res.end();

});

server.listen(3000);

