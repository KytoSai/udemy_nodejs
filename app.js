const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(req);
  // process.exit(); // Lệnh này làm cho thoát khỏi event loop nên sẽ stop server luôn
});

server.listen(3000);

