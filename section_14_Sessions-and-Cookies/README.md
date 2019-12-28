# COURSE

## SECTION 14 - Sessions & Cookies

- Bài này sử dụng db `udemy_section13_shop` chung với SECTION trước

### 233. Adding the Request Driven Login Solution

### 234. Setting a Cookie

- Để set 1 cookie đơn giản cho browser ta chỉ cần send 1 header với code như sau 
  - VD: set 1 cookie với key là `loggedIn` giá trị là `true`
    ```javascript
      res.setHeader('Set-Cookie', 'loggedIn=true');
    ```
- Để lấy thông tin cookie thì ta sử dụng lệnh `req.get('Cookie')`
  - Thật ra .get ở đây là get cái đống trên request header, truyền đúng key là lấy được - https://i.imgur.com/aFSWQXC.jpg 

### 235. Manipulating Cookies

### 236. Configuring Cookies

- Ta có thể set thời gian tồn tại của cookie bằng cách thêm `Max-Age=10`
  ```javascript
    res.setHeader("Set-Cookie", "loggedIn=true; Max-Age=10");
  ```
- Ta có thể set yêu cầu cookie chỉ có thể sử dụng với phương thức `https`
  ```javascript
    res.setHeader("Set-Cookie", "loggedIn=true; Secure");
  ```

### 238. Initializing the Session Middleware

- Cần sử dụng package ngoài để sử dụng session tên là `express-session`

### 239. Using the Session Middleware


- Tạm có thể hiểu là session cũng chỉ là 1 cookie nhưng được mã hóa và chỉ có thể xử lý ở server side

### 240. Using MongoDB to Store Sessions

- Vì mặc định không dùng thư viện ngoài thì session sẽ lưu vào RAM, đối với lượng truy cập lớn thì đây không phải việc nên làm, vì vậy cần vào trang https://github.com/expressjs/session để tim 1 thư viện giúp hỗ trợ lưu session vào đâu đó (store, db,...)
  - Trong video sẽ hướng dẫn dùng - https://www.npmjs.com/package/connect-mongodb-session 

### 242. Deleting a Cookie

- Sử dụng hàm `.destroy(callback)` để hủy session hiện tại
  ```javascript
    req.session.destroy((err) => {
      console.log(err)
      res.redirect('/')
    });
  ```
- Khi destroy session xong thì ta check ở trình duyệt sẽ vẫn thấy cookie `connect_id` vẫn tồn tại nhưng check trong db thì đã xóa mất, đừng lo lắng vì sẽ không ảnh hưởng gì cả vì cookie này không có match đến session nào trong db
- Có một vấn đề thắc mắc là theo vidoe thì không có set cmg ở expire nhưng trong video cái cookie của session vẫn hiện expire nhưng trong thực tế khi code hiện tại thì cột `Expires/Max-Age` nó lại ghi chữ `Session` méo hiểu là có ý nghĩa cmg
  - Ngoài ra ổng có bảo tắt browser đi thì nó sẽ xóa cookie này đi, nhưng tắt bật sml vẫn còn y nguyên ???

### 244. Making "Add to Cart" Work Again

- Đối với trường hợp khai báo dạng `ref` như sau
  ```javascript
    userId: {
      type: Schema.Types.ObjectId, // ở đây ghi là objectId
      ref: 'User',
      required: true
    }
  ```
- Ta có thể nhét nguyên cái object của `user` vào cái field `userId` luôn thay vì chỉ là `user._id` thôi
  - VD: ở trong function `postAddProduct` ta nhét nguyên cái req.user vào nó vẫn chạy ầm ầm
    ```javascript
      const product = new Product({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl,
        userId: req.user // Chỗ này để `req.user` hoặc `req.user._id` đều chạy tốt
      });
    ```

### 245. Two Tiny Improvements

- Bổ sung callback khi save session để tránh bug khi chưa xử lý xong các action với session đã bị thực hiện hành vi khác gây sai dữ liệu.
  - VD: như khi đăng nhập ta lưu thông tin user vào session nhưng chẳng may ta cho lệnh `res.redirect('/')` nó thực hiện sau lệnh `req.session.user = user` thì khi database đang bị quá tải và lưu chậm khi chuyển đến trang `/cc` lúc đó ta lôi session user ra sử dụng có khi dữ liệu session user lúc đó lại chưa có vì lưu session cũng là bất đồng bộ
    - Cũ
      ```javascript
        req.session.user = user;
        res.redirect('/cc');
      ```
    - Fix
      ```javascript
        req.session.user = user;
        req.session.save(() => { // Đảm bảo việc session đã xử lý xong mới đi làm việc khác
          res.redirect('/cc');
        });
      ```