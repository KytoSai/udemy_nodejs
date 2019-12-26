# COURSE

## SECTION 13 - Working with Mongoose

- LƯU Ý: 
  - Khi cài lại máy hay gì nhớ bổ sung address ip vào white list mongodb để có thể connect vào được  
- Mongodb driver là các hàm được cung cấp bởi mongodb native mà ta dùng ở Section 12

### 210. Connecting to the MongoDB Server with Mongoose

- Video hướng dẫn connect tới mongodb với mongoose thay vì dùng api gốc của mongodb
- Sẽ tạm thời off các code cũ để có thể run được connect trước

### 211. Creating the Product Schema

- Bài của section 12 sẽ lưu ở database `shop`, còn của bài này sẽ lưu là `udemy_section-13_shop`
- Video hướng dẫn cách tạo cấu trúc `schema` cho các collection trong mongodb

### 212. Saving Data Through Mongoose

- Video hướng dẫn sử dụng `product` model đã tạo ở video trước
- Implement vào admin controller
  - Một số function sẽ có sẵn từ moogose như `save()` (giúp lưu 1 document mới vào database)

### 213. Fetching All Products

- Video hướng dẫn cách lấy danh sách sản phẩm để hiển thị
- Moogose cũng có hàm `Product.find()` nhưng cách hoạt động khác của mongo driver là nó trả về 1 danh sách product chứ không trả về 1 cursor. 
  - Nếu muốn trả về 1 cursor thì thêm `Product.find().cursor()`

### 214. Fetching a Single Product

- Hàm ` Product.findById(prodId)` khác với mongodb driver là phải convert prodId sang ObjectId thì moongose tự convert sang dùm luôn

### 215. Updating Products 

- Video hướng dẫn cách update thông tin product.
- Các bước update thông tin product
  - Công việc sẽ theo step là đầu tiên dùng `Product.findById(productId)` để tìm được product muốn sửa, khi nhận được `product` trả về object này ngoài các dữ liệu về product như title,imageUrl,description,... sẽ có đầy đủ các function cung cấp bởi moongose để sử dụng. 
  - Bước thứ 2 sau khi lấy thông tin ta sẽ sửa các thuộc tính title,imageUrl,... rồi chạy lệnh `.save()` để lưu lại thông tin product đó

### 216. Deleting Products

- Sử dụng `.findByIdAndRemove` để remove 1 document trong collection

### 217. Adding and Using a User Model

- Hướng dẫn tạo userModel 
- Ta có thể lấy các type có thể sử dụng trong `type` trong Schema bằng cách dùng `Schema.Types.ObjectId` 
  - Demo: https://i.imgur.com/7sQq7T3.jpg

### 218. Using Relations in Mongoose

- Cách tạo quan hệ như db mysql 
- Ở các phần khai báo `schema` các id cần trỏ liên kết tới đối tượng khác cần khai báo thêm thuộc tính `ref` dẫn tới model của đối tượng cần liên kết
  - VD: liên kết sản phẩm với 1 userId nào đó thì ta cấu hình
    ```javascript
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ```

### 219. One Important Thing About Fetching Relations

- Video hướng dẫn cách lấy những sản phẩm chỉ của user mình cần thôi
- VD: fetch tất cả product trong admin thì ta thêm `.populate('userId')`
  ```javascript
    Product
      .find()
      .populate('userId')
      .then(...)
  ```
- Khi sử dụng cái populate này thì data nhận được sẽ có full dữ liệu về userId mà mình trỏ tới
- Ta có thể sử dụng `.select('field_1 field_2')` với `field_1` , `field_2` là các field cần lấy trong các document trả về
  - VD: chỉ muốn lấy title price không lấy id của sản phẩm, với thông tin user ta chỉ cần username thì là
    ```javascript
      Product
        .find()
        .select('title price -_id')
        .populate('userId', 'name')
        .then(products => {
    ```
    - Dấu `-` trước `_id` là đại diện cho không lấy field đó

### 220. Working on the Shopping Cart

- Video hướng dẫn cách add sản phẩm vào cart
- Để có thể thêm method vào schema ta dùng `userSchema.methods.addToCart`

### 221. Loading the Cart

- `.populate` sẽ không return 1 promise, vì vậy để nhận được return là 1 promise ta phải bổ sung thêm method `.execPopulate()` để lấy được promise
- Khi đưa thêm 1 item product vào `user.cart.items` thì mỗi item product trong cart items này cũng sẽ có thêm _id riêng
  - DEMO: https://i.imgur.com/DZCMsw3.jpg 
- Dữ liệu product khi được map từ `productId` trong cart items sẽ nằm trong fied `productId` 
  - DEMO: https://i.imgur.com/VcqG2k5.jpg 

### 222. Deleting Cart Items

### 223. Creating & Getting Orders

- Hướng dẫn khởi tạo model order để quản lý đơn hàng
- Khi dùng `ref` cho thuộc tính 
