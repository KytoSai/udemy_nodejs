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
      mongodb+srv://<user01>:<password>@cluster0-1cukr.mongodb.net/<databaseName>?retryWrites=true&w=majority
    ```
    - thay `user01` bằng user muốn kết nối
    - thay `password` bằng password đã setup ở bước 3 cho user01
    - thay `databaseName` thành database muốn sử dụng
      - Nếu db này chưa tồn tại nó sẽ khởi tạo tự động

### 179. Installing the MongoDB Driver 

### 180. Creating the Database Connection 

### 181. Finishing the Database Connection

- Ở chuỗi kết nối mongodb cung cấp nhớ thay đổi databaseName để có thể tạo databaseName ưng ý, ở hướng dẫn sẽ là `shop`
  - Nếu db chưa tồn tại sẽ được tự động khởi tạo
  ```javascript
    MongoClient.connect('mongodb+srv://user01:123123123@cluster0-1cukr.mongodb.net/shop?retryWrites=true&w=majority')
  ```
- Video hướng dẫn cách lưu lại kết nối tới db để tái sử dụng lại
  ```
    _db = client.db();
  ```

### 182. Using the Database Connection 
### 183. Creating Products

- Video hướng dẫn cách insert 1 item product vào collection `products`
  - Khi insert thành công log ra sẽ ra 1 mớ nhưng chủ yếu quan tâm phần cuối của log - https://i.imgur.com/uKOdS1b.png
  ```javascript
    ops: [
      Product {
        title: ' Title ',
        price: '1',
        description: '                   \r\n' +
          '                    Officia consectetur tempor laborum aliquip labore ad incididunt in qui labore.\r\n' +
          '                  \r\n' +
          '                ',
        imageUrl: ' https://cdn.gsmarena.com/imgroot/news/19/06/xiaomi-cc-series-what-it-means/-727/gsmarena_001.jpg ',
        _id: 5dfe5bf4bb37582d10a38819
      }
    ],
    insertedCount: 1,
    insertedId: 5dfe5bf4bb37582d10a38819
  ```

### 184. Understanding the MongoDB Compass

- Sử dụng app `compass` để quản lý mongodb 
  - Download - https://www.mongodb.com/download-center/compass 