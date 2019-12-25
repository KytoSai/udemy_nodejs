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