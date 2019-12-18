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
    - => Sau này sử dụng các phương thứ `post`, `get`,.. thay cho `use` thì sẽ hết bị

### 64. Parsing Incoming Requests 

- Video hướng dẫn cách gửi thông tin từ page `/add-product` tới page `/product` bằng method POST
- Để lấy được thông tin body của method post phải sử dụng thư viện `bodyParser`
  - Thư viện này ở thời điểm hiện tại để sử dụng function `bodyParser.urlencoded` phải truyền thêm option vào `{ extended: true }`
  - Issue: https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended 
  ```javascript
    app.use(bodyParser.urlencoded({ extended: true }));
  ```
    - Việc set true/false cho `extended` ở đây đơn giản là quyết định sử dụng loại parse dữ liệu của thư viện nào thôi - https://www.npmjs.com/package/body-parser#extended 

### 65. Limiting Middleware Execution to POST Requests

- Video giới thiệu về `post`, `get`,...

### 66. Using Express Router

- Video hướng dẫn sử dụng `express.Router()` , tách routes ra quản lý ở các file riêng
- Ở các video trước chúng ta không sử dụng `get`, `post` mà chỉ sử dụng `use` , việc này rất nguy hiểm vì nó sẽ làm cho thứ tự khi ta săp xếp các router rất quan trọng, xếp thứ tự sai là khỏi vào được router mong muốn luôn
  - Ở bài này có thể thử bằng cách 
    - sửa ở `shop.js` về `router.use` rồi vào url `http://localhost:3000/add-product` là chỉ thấy giao diện của `hello expressjs`
    - Đổi thứ tự router trong app.js thành
      ```javascript
        app.use(shopRoutes);
        app.use(adminRoutes);
      ```
    - Demo: https://i.imgur.com/15RujSU.png
- Các phương thức `get`, `post`, `put`,... giúp ta detect được router chính xác sẽ thực hiện middleware khi client truy cập vào

### 67. Adding a 404 Error Page

- Theo nguyên tắc các middleware sẽ run từ trên xuống dưới, vì vậy để tạo 1 page 404 , ta sẽ tạo 1 router dưới cùng hứng các requets mà không match với bất cứ router nào đã dùng trước đó.
  - Sử dụng `app.use` để tạo page này
  - Nhớ set status 404 cho page này

### 68. Filtering Paths

- Hướng dẫn cách tạo prefix router cho config router có sẵn
  - VD: ở bài trước có các router `/add-product`, `/product` ta muốn thêm prefix router là `/admin` ở trước 2 router đó thành `/admin/add-product`, `/admin/product` Ta sẽ có 2 cách
    - Cách 1 là ở mỗi cấu hình path router ta thêm prefix `/admin/...` ở trước, nhưng cách này thủ công và sửa sml
    - Cách 2 là ở `app.use(adminRoutes)` ta thêm cấu hình thành `app.use('/admin',adminRoutes)`
  