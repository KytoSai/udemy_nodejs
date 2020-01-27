# COURSE

## CONFIG MONGODB

- Url config `mongodb+srv://user01:123123123@cluster0-1cukr.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`

- User test
  - test@gmail.com - 123456

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

### 376. Storing Posts in the Database
### 377. Static Images & Error Handling
### 378. Fetching a Single Post
### 379. Image Names & Windows
### 380. Uploading Images
### 381. Updating Posts 
### 382. Deleting Posts 
### 383. Adding Pagination 
### 384. Adding a User Model 
### 385. Adding User Signup Validation 
### 386. Signing Users Up 

- Chưa coi video

### 387. How Does Authentication Work? 

- The token's mechanism used to authenticate the website - https://i.imgur.com/On7vSat.jpg 
- What will a token include ? - https://i.imgur.com/EJ7U4Ky.jpg 
  - Data
  - Signature (can be verified by server via secret key)
- Jwt github - https://github.com/auth0/node-jsonwebtoken

### 388. Starting with User Login

- Initialize the login feature at FE and BE with router `auth/login`

### 389. Logging In & Creating JSON Web Tokens (JWTs)

- Use method `jwt.sign` (signature) to create a new token
  - Exam:
    ```javascript
       const token = jwt.sign({ // Data store in token
          email: loadedUser.email,
          userId: loadedUser._id.toString()
        },
        'somesupersecretsecret', // Secret key
        { expiresIn: '1h' }
      );
    ```
- Question: How to prevent other people stolen my token if i set my token exists large one month ?
- If collection of mongodb not exists. And you insert new document, it will auto generate new collection with name of model you exported with the suffix `s`
  - Exam: 
    ```javascript
      // User model exported
      mongoose.model('User', userSchema);
      // Collection auto generate with name `users`
    ```


