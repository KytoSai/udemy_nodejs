# COURSE

## SECTION 12 - Working with NoSQL & Using MongoDB

### 178. Setting Up MongoDB

- Video hướng dẫn setup MongoDB trên website
- Step 1: đăng ký tài khoản sau đó đăng nhập vào trang quản trị - https://i.imgur.com/b9Xjw5K.png 
- Step 2: tạo 1 cluter mới, để mọi thứ mặt định rồi accept thôi - https://i.imgur.com/EPca1Wm.png
- Step 3: setup user để quản trị db
  - Cột trái chọn security -> database access -> add new user  - https://i.imgur.com/PlQ7rnw.png
  - Sau đó bấm edit để cấp quyền cho user - https://i.imgur.com/iZizTKk.png
- Step 4: Cấp quyền IP được phép truy cập vào db
  - Cột trái security -> network access -> Add ip address
  - Hiện popup bấm add current ip address để add ip hiện tại của máy mình vào - https://i.imgur.com/helDoH3.png
- Step 5: quay lại trang chính
  - Atlas -> Cluters -> bấn vào nút `Connect` ở cluster mình đã tạo
  - Nhảy popup ta chọn phương thức `Connect your application` - https://i.imgur.com/1o1mJv8.png
  - Sau đó sẽ tới bước tiếp theo để lấy mã code kết nối - https://i.imgur.com/C2nFgEl.png
    ```
    mongodb+srv://user01:<password>@cluster0-1cukr.mongodb.net/test?retryWrites=true&w=majority
    ```
    - thay `user01` bằng user muốn kết nối
    - thay `password` bằng password đã setup ở bước 3 cho user01

### 179. Installing the MongoDB Driver 

### 180. Creating the Database Connection 

