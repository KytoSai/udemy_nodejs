const fs = require('fs');

const requestHandler = (req, res) => {
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

    return req.on('end', function() {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      }); 
    });
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
}

// Export duy nhất 1 function cần thiết
// module.exports = requestHandler;

// Hoặc export thành object
// module.exports = {
//   handler: requestHandler,
//   someText: 'Home hard coded text',
// };

// Tương đương cách trên
// module.exports.handler = requestHandler;
// module.exports.someText = 'Home hard coded text';

// Hoặc rút gọn hơn
exports.handler = requestHandler;
exports.someText = 'Home hard coded text';