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
