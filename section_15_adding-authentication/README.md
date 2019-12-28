# COURSE

## SECTION 15 - Adding Authentication

- Bài này sẽ chỉ xem sơ qua để tập trung cho các phần API ưu tiên hơn
- Bài này sẽ sử dụng db `udemy_nodejs_section14` 

### 254. Encrypting Passwords

- Bài này ta sẽ sử dụng thư viện `bcryptjs` để mã hóa password lưu vào db - https://github.com/dcodeIO/bcrypt.js 
  - Việc bcryptjs encrypt password sẽ là 1 hành vi async vì vậy nó sẽ trả về promise
- Ở bài trước cách xử lý validation khi trùng Email của video hơi ngu vì nó vẫn run cái đoạn ghi nhận thông tin user signup mới vào dẫn đến báo lỗi tào lao - https://i.imgur.com/B5qRYLI.jpg

### 255. Adding a Tiny Code Improvement

- Fix cái vụ nhập trùng email báo lỗi cho chuẩn kia

### 256. Adding the Signin Functionality

- Thêm tính năng đăng nhập
- Hướng dẫn cách dùng bcryptjs để so sánh password hiện tại với password trong db

### 257. Working on Route Protection
### 258. Using Middleware to Protect Routes

- Ở các video trước đã làm việc xác thực user để ẩn hiện menu, nhưng các router vẫn có thể gõ trực tiếp để truy cập, vì vậy video này hướng dẫn cách thêm 1 middleware chạy trước mỗi middleware cần bảo bật thông tin
- VD: Thêm check auth cho router thêm sản phẩm của admin 
  - Cũ
    ```javascript
      router.get('/add-product', adminController.getAddProduct);
    ```
  - Mới
    ```javascript
      router.get('/add-product', isAuth, adminController.getAddProduct);
    ```
  - => Nghĩa là ta có thể chèn bao nhiêu middleware cũng được sau khi cấu hình đường dẫn router ở tham số đầu tiên của `.get, .post,...`

### 259. Understanding CSRF Attacks
### 260. Using a CSRF Token
### 261. Adding CSRF Protection 

- Giải thích về CSRF - https://viblo.asia/p/ky-thuat-tan-cong-csrf-va-cach-phong-chong-amoG84bOGz8P 
- Sử dụng thư viện `csurf` để chống tấn công CSRF - https://github.com/expressjs/csurf 
  - `csurf` sẽ bắt tất cả các form với phương thức không cho phép đều phải được truyền 1 field với thông tin `csrfToken` để xác thực
  - Tên field đó default là `_csrf`
    - VD: truyền lên cho form logout như sau
      ```html
        <form action="/logout" method="post">
          <input type="hidden" name="_csrf" value="<%= csrfToken %>">
          <button type="submit">Logout</button>
        </form>
      ```
- Expressjs có hỗ trợ 1 property giúp truyền biến vào view sẽ được render đó là `.locals`
  - VD:
    ```javascript
      res.locals.isAuthenticated = req.session.isLoggedIn;
      res.locals.csrfToken = req.csrfToken();
    ```

### 263. Providing User Feedback 

- Viết show message cho user biết tình trạng kết quả sau khi xử lý vấn đề gì đó
- Sử dụng thư viện - https://github.com/jaredhanson/connect-flash 
