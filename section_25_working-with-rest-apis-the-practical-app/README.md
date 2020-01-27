# COURSE

## CONFIG MONGODB

- Url config `mongodb+srv://user01:123123123@cluster0-1cukr.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`

## SECTION 25 - Working with REST APIs - The Practical Application

### 369. REST APIs & The Rest Of The Course 

### 370. Understanding the Frontend Setup

### 371. Planning the API

### 372. Fetching Lists of Posts 

- Giả data từ BE với router `localhost:8080/feed/posts` 

### 373. Adding a Create Post Endpoint 

- Giả việc send 1 post từ FE tới BE

### 374. Adding Server Side Validation 

- (chưa làm theo video)
- Sử dụng express-validator để validate input của api 

### 375. Setting Up a Post Model

- Trong cấu hình `schema` của model post, ta thêm option `{ timestamps: true }` nó giúp cho tự động tạo `createdAt` và `updatedAt` mỗi khi có sự thay đổi data
  - Quote `4:06` - `when a new version is added to the database, when a new object is added to the database. So we automatically get a createdAt and updatedAt timestamp out of the box then` 

