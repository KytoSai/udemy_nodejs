const http = require('http');

const server = http.createServer(function(req, res) {
  const url = req.url; // Url chỉ trả về địa chỉ tương đối

  if(url === '/') {
    res.setHeader('Content-type', 'text/html'); // Set để client nhận biết đây là tài liệu html
    res.write(`
      <html>
        <head>
          <title>Enter message</title>
        </head>
        <body>
          <form action="/message" method="GET">
            <input type="text" name="messageContent" />
            <button type="submit">Send</button>
          </form>
        </body>
      </html>
    `)
    return res.end();
  }

  res.setHeader('Content-type', 'text/html'); // Set để client nhận biết đây là tài liệu html
  res.write(`
    <html>
      <head>
        <title>Other page</title>
      </head>
      <body>
        Body tag
      </body>
    </html>
  `)
  return res.end();
});

server.listen(3000);

