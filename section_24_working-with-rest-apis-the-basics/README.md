# COURSE

## SECTION 24 - Working with REST APIs - The Basics

### 357. Module Introduction
### 358. What are REST APIs and why do we use Them?
### 359. Accessing Data with REST APIs

### 360. Understanding Routing & HTTP Methods

- Giới thiệu các method - https://i.imgur.com/dhjsqQq.jpg 

### 361. REST APIs - The Core Principles 

- Nguyên tắc chính của REST APIs - https://i.imgur.com/vIN68LM.jpg 

### 362. Creating our REST API Project & Implementing the Route Setup 

### 363. Sending Requests & Responses and Working with Postman

- Sẽ tốt hơn nếu dùng status 201 để thông báo là resouce đã được khởi tạo thành công, thay vì 200 mặc định chỉ đơn giản là thông báo thành công
  - `if you want to tell the client success a resource was created. Just 200 is just success`

- Để có thể gửi form post lên cho api ta sử dụng
  ```javascript
    app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
  ```
    - Demo: https://i.imgur.com/vQRPnPr.jpg nếu sử dụng 

- Nếu dùng gửi lên dạng
  ```javascript
    app.use(bodyParser.json()); // application/json
  ```
    - Thì gửi lên `postman` phải chọn tab `raw` và gửi content là `json` - https://i.imgur.com/igql8Pk.jpg 

### 364. REST APIs, Clients & CORS Errors

- Để có thể tránh lỗi `CORS` khi gọi tới RESTs API thì từ server cung cấp API ta cần set 1 số thông tin header như sau
  ```javascript
    app.use((res, req, next) => {
      res.setHeader('Access-Control-Allow-Orgigin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    });
  ```

### 365. Sending POST Requests 

- Để có thể gửi lên server-side của các bài trước nhận với `fetch()` ta phải format content-type của header lại thành `application/json` - https://i.imgur.com/3JjdRWo.jpg 
- Nếu ta dùng `fetch()` để lấy data và không setting header method là gì thì khi gửi lên mặc định nó sẽ là `OPTIONS`