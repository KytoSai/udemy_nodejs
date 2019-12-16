# NOTE

# COURSE

## 03 - Understanding the Basics

- Nodejs bao gồm nhiều modules nhưng có các core modules chính là `http, https, fs, path, os`
  - Vì linux / windows có vấn đề xử lý path khác nhau nên có thể dùng module os để hỗ trợ xử lý vấn đề này
    - VD: linux phân biệt thư mục viết in / thường 

- Để có thể sử dụng cơ chế `import X from 'X'` trong môi trường nodejs thì ở file `package.json` bổ sung field `"type": "module",`
  - DOC: https://nodejs.org/docs/latest-v12.x/api/esm.html#esm_ecmascript_modules 
  - => Tuy nhiên chưa nên sử dụng kiểu này vì phần lớn module vẫn viết kiểu cũ là `commonjs` nên sẽ không tương thích hoàn toàn dễ gây lỗi tào lao

### 27. The Node Lifecycle & Event Loop

- Sơ đồ event loop - https://i.imgur.com/FOsFGoY.png
- Lệnh `process.exit` giúp cho thoát khỏi event loop

### 29. Understanding Requests

- Một số field chủ yếu cần quan tâm đối với param `req` là `url, method, headers,...`
  - `url` trả về địa chỉ tương đối của client request lên server

### 30. Sending Responses

- Học cách hiểu quả trnhf send 1 response có html từ server tới client, giúp sau này học expressjs sẽ hiểu thực tế expressjs sẽ xử lý thế nào