# COURSE

## SECTION 14 - Sessions & Cookies

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