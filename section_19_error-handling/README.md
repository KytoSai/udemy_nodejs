# COURSE

## SECTION 19 - Error Handling

- Bài này sẽ sử dụng db `udemy_nodejs_section19`

### 305. Types of Errors & Error Handling
### 306. Analyzing the Error Handling in the Current Project
### 307. Errors - Some Theory

- Sơ đồ phân chia các loại bug - https://i.imgur.com/tjiu2Av.jpg 

### 309. Returning Error Pages

- Video hướng dẫn 2 cách tiếp cận thông báo lỗi tại trang hoặc redirect tới page `/500` khi gặp tình huống lưu sản phẩm bị lỗi. Cụ thể là giả tình huống trùng ID của sản phấm

### 310. Using the Express.js Error Handling Middleware 

- Ta có thể ném error ra thông qua hàm `next(error)` như sau
  - Ném ra từ 1 router nào đó
    ```javascript
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    ```
  - Và khởi tạo 1 middleware handle lỗi để hứng
    ```javascript
      app.use((error, req, res, next) => { // Có thêm field error
        // res.status(error.httpStatusCode).render(...);
        res.redirect('/500');
      });
    ```
      - Express sẽ tự hiểu nếu ta truyền 4 tham số cho callbakc trong app.use với tham số đầu sẽ là error, đây là 1 middleware đặc biệt
      - Nếu ta define nhiều middleware error-handling thì các middleware sẽ thực hiện từ trên xuống dưới tuần tự giống middelware bình thường
- Sau khi ta define middleware error-handleing thì khi ta thực hiện `thrown new Error('cc')` trong code của router nó sẽ tự động nhảy tới middleware này