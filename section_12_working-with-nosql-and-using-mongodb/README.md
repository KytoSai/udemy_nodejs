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
- Các item trong products gọi là document

### 184. Understanding the MongoDB Compass

- Sử dụng app `compass` để quản lý mongodb 
  - Download - https://www.mongodb.com/download-center/compass 

### 185. Fetching All Products

- Để lấy toàn bộ data của 1 collection ta chỉ cần dùng lệnh `find()`
  ```javascript
    db
      .collection('products')
      .find() // Lấy cụ thể thì truyền 1 object với các field tương tứng vào `find`
      .toArray() // Phải có để lấy được data trả về
  ```
  - Lưu ý nếu ta chỉ dừng ở find() thì sẽ không có data để sử dụng vì `A cursor to the documents that match the query criteria. When the find() method “returns documents,” the method is actually returning a cursor to the documents.`
    - DOC: https://docs.mongodb.com/manual/reference/method/db.collection.find/index.html#definition
  - Để xử lý tiếp một đối tượng là `cursor` đọc doc - https://docs.mongodb.com/manual/reference/method/js-cursor/ 

### 186. Fetching a Single Product

- Video hướng dẫn cách lấy thông tin 1 product
- Lưu ý là ở các video trước ta biết khi insert 1 product vào collection `products` nó sẽ tự thêm field `_id` nhưng cần để ý là giá trị nó lưu không phải string hay number mà 1 dạng `object`, object này là dạng `bson` 
  ```javascript
    "_id":{"$oid":"5dfe5bf4bb37582d10a38819"}
  ```
  - Demo - https://i.imgur.com/s2dYnKL.png 
- Để convert id muốn truyền vào về đúng dạng lưu trong db thì ta dùng `new mongodb.ObjectId(productId)`

### 187. Making the "Edit" & "Delete" Buttons Work Again
### 188. Working on the Product Model to Edit our Produc
### 189. Finishing the "Update Product" Code
### 190. One Note About Updating Products

- Update 1 item trong collection sử dụng hàm `updateOne`
  - DOC: https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/index.html#db-collection-updateone 
  - Ở đây ta sử dụng `{ $set: data }` để update dữ liệu của product
    - Nếu data là 1 field mới thì dữ liệu của sản phẩm đó sẽ được bổ sung thêm field mới này chứ không phải xóa hết đống field cũ
    - VD:
      ```javascript
        .updateOne(
          { _id: new mongodb.ObjectId(this._id) }, // Tìm đối tượng
          { $set: {
            a: 1
          } } // Data cần update
        );
      ```
      - Field `a: 1` sẽ được bổ sung thêm vào product với _id (trước đó có `title, imageUrl, price, description` thì giờ sẽ có thêm `a`)
      - Demo: https://i.imgur.com/kvfav5K.png 
      
### 191. Deleting Products

- Để remove 1 item document trong collection sử dụng hàm `deleteOne`
  - DOC: https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/index.html#db-collection-deleteone 

### 192. Fixing the "Add Product" Functionality

- Khi add product thì lúc đầu id sẽ không có nhưng ta lại dùng `this._id = new mongodb.ObjectId(id)` để lưu lại id truyền từ ngoài vào, khi id không có data nhưng ta cho chạy qua hàm `objectId(id)` thì dẫn tới _id khi được gán sẽ có giá trị khác rỗng, dẫn tới khi add product nó cứ hiểu là update product
 - Vì vậy cần chekc điều kiện khi gán id truyền vào từ ngoài cho _id để sửa lỗi này

### 193. Creating New Users

- Khởi tạo collection `users` trong db của mình để có dữ liệu user code
  - Chọn mục này cho dễ nhập thông tin mới - https://i.imgur.com/L0CZ1sw.png

### 194. Storing the User in our Database

- Vấn đề đặt ra là, giờ muốn lưu thông tin sản phẩm nhưng có reference của thông tin user đã lưu sản phẩm phải làm thao ??? Video sẽ hướng dẫn:
  - Cách lưu lại thông tin user để dùng lại ở các nơi khác. Gán `req.user = user` ở app.js để làm việc này
  - Cấu hình lại product model để lưu thêm userId 
  - Sau khi insert được tham chiếu của userId vào product ta sẽ có demo như sau - https://i.imgur.com/QruPWwk.png 
    - Chỉ khó hiểu là `userId` khi insert vào document product thì hoàn toàn không có conver bằng hàm `new mongodb.ObjectId(userId)` nhưng khi lưu thì nó lại lưu đúng định dạng BSON của mongodb ???