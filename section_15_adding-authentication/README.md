# COURSE

## SECTION 15 - Adding Authentication

- Bài này sẽ chỉ xem sơ qua để tập trung cho các phần API ưu tiên hơn
- Bài này sẽ sử dụng db `udemy_nodejs_section14` 

### 254. Encrypting Passwords

- Bài này ta sẽ sử dụng thư viện `bcryptjs` để mã hóa password lưu vào db - https://github.com/dcodeIO/bcrypt.js 
  - Việc bcryptjs encrypt password sẽ là 1 hành vi async vì vậy nó sẽ trả về promise
- Ở bài trước cách xử lý validation khi trùng Email của video hơi ngu vì nó vẫn run cái đoạn ghi nhận thông tin user signup mới vào dẫn đến báo lỗi tào lao - https://i.imgur.com/B5qRYLI.jpg
