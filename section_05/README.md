# NOTE

# COURSE

## Section 05 - Working with Express.js

### 59. Installing Express.js

### 60. Adding Middleware

- Sơ đồ về xử lý middleware của express - https://i.imgur.com/xzqV7K7.png 
  - Cơ chế chính của epxress là khi 1 request đi tới sẽ đi qua 1 loạt xử lý trung gian (các middleware) rồi mới trả về response 
  - Việc chia middleware sẽ giúp cho code chia thành nhiều block nhỏ dễ xử lý hơn, chẳng hạn như thêm 1 third party package để xử lý gì đó chen vào giữa 
- `app.use(req, res, next)`
  - `next` sử dụng giúp ta đi tiếp các middleware tiếp theo - https://i.imgur.com/tv5Jurm.png 

### 61. How Middleware Works  

### 62. Express.js - Looking Behind the Scenes 

- Có thể tìm hiểu sâu hơn về lệnh `send` của expressjs hoạt động thế nào - https://github.com/expressjs/express/blob/master/lib/response.js 
- Viết rút gọn app loại loại bỏ các module `http` , sửa lại cách start server đơn giản hơn với expressjs

### 63. Handling Different Routes 

- Video hướng dẫn cách tạo router với express
- Có 1 điểm khó hiểu là ở đầu video chỉ define 1 router `/` và dặt 1 `console.log('In another middleware');` thì khi truy cập trang `http://localhost:3000/` thì lại thấy log ra 2 lần
  - Demo code: https://i.imgur.com/Xw5rrT7.png 
    ```javascript
      const express = require('express');
      const app = express();

      app.use('/', (req, res, next) => {
        console.log('In another middleware');
        res.send(`
          <h1>Hello expressjs</h1>
        `)
      });

      app.listen(3000);
    ```
  - Demo log: https://i.imgur.com/njAYX7h.png
  - => không hiểu tại sao ??????