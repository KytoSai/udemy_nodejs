const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  const url = req.url; // Url chỉ trả về địa chỉ tương đối
  const method = req.method;

  // Check router home page
  if(url === '/') {
    res.setHeader('Content-type', 'text/html'); // Set để client nhận biết đây là tài liệu html
    res.write(`
      <html>
        <head>
          <title>Enter message</title>
        </head>
        <body>
          <form action="/message" method="POST">
            <input type="text" name="messageContent" />
            <button type="submit">Send</button>
          </form>
        </body>
      </html>
    `)
    return res.end();
  }

  // Check router message page
  if(url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', function(chunk) {
      body.push(chunk);
    });

    req.on('end', function() {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody); // parsedBody sẽ trả về theo dạng `messageContent=noi_dung_ban_nhap`
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    
    res.statusCode = 302;
    res.setHeader('Location', '/');
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

