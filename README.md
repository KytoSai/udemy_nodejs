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

- Học cách hiểu quả trình send 1 response có html từ server tới client, giúp sau này học expressjs sẽ hiểu thực tế expressjs sẽ xử lý thế nào ở bên trong core

### 32. Routing Requests

- Hướng dẫn cách tạo router cho server nodejs, đơn giản là chỉ cần if else dựa vào url của client khách truy cập bằng biến `req.url` rồi trả về content như mình mong muốn client nhận

### 33. Redirecting Requests

- Hướng dẫn vào 1 router và reditect đi router khác bằng cách thay đổi header trả về client bằng hàm `res.setHeader('Location', '/router-muon-den');`
- Cách tạo ra 1 file message.txt ghi data vào đó

### 34. Parsing Request Bodies 

- Sơ đồ giải thích về luồng đi của stream data, buffer là gì,... - https://i.imgur.com/mTnFPcC.png 
  - Đại khái là data được gửi từ client lên theo nguyên tắc là stream, gửi tới đâu nhận tới đó, dẫn đến data ta sẽ nhận cũng ngắt quảng bởi nhiều phần khác nhau, các phần data đó ta gọi là `chunk`
- Video hướng dẫn cách có thể lấy được data từ phương thức `POST` gửi qua form làm cách nào để nhận và sử dụng