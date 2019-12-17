# NOTE

# COURSE

## Section 3 - Understanding the Basics

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

### 35. Understanding Event Driven Code Execution

### 36. Blocking and Non-Blocking Code 

- Đối với việc tạo file thì sử dụng `writeFileSync` để code bên dưới tiếp tục chạy trong khi file vẫn tiếp tục được ghi, nếu chỉ là `writeFile` thì khi ghi 1 data quá lớn nó sẽ chờ ghi xong mới thực hiện lệnh bên dưới => blocking even loop
- Vì lợi thế của Nodejs là bất đồng bộ, tức là mình chỉ nó đang làm này nhảy qua làm kia khi rãnh, không giữ lại luồng xử lý lâu nên tốc độ sẽ tốt hơn php tuần tự dừng đợi xong hết mới trả về

### 37. Node.js - Looking Behind the Scenes 

- https://i.imgur.com/D1qXsoi.png

### 38. Using the Node Modules System

- Thử nghiệm các kiểu export module kiểu cũ (không phải es6 là `export default ...`)

### 39. Wrap up

- Tổng kết - https://i.imgur.com/nkm9amo.png 

## Section 4 - Improved Development Workflow and Debugging

### 42. Understanding NPM Scripts

### 43. Installing 3rd Party Packages

### 45. Using Nodemon for Autorestarts

- Sử dụng package nodemon để khi code tự rerun lại entry point (tức file chính của project) - https://github.com/remy/nodemon 
  - Setup key cho `package.json` để run nodemon 
    ```json 
      "scripts": {
        "dev": "nodemon app.js"
      },
    ```
  - Khi run lệnh chạy rồi gõ `rs` rồi gõ `enter` sẽ restart được nodemon đang chạy

- Lý do khi gõ trực tiếp `nodemon app.js` không chạy mà phải dùng qua script của package.json là vì nodemon không được cài global, dẫn đến lệnh gõ lúc đó là lệnh global nên không thực thi

### 47. Understanding different Error Types

- Có 3 loại lỗi gặp phải là
  - Syntax error
  - Runtime error
  - Logical error

### 50. Logical Errors

- Học cách debug với vscode
- Đầu tiên mở tab `debug` bên cột trái lên, sau đó chọn tạo config ở `lauch.json`, sau đó tạo debug với config là `Launch Program` - https://i.imgur.com/NRuT8Uj.png 
  ```json
    {
      // Use IntelliSense to learn about possible attributes.
      // Hover to view descriptions of existing attributes.
      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Launch Program",
          "program": "${workspaceFolder}/app.js",
          "skipFiles": [
            "<node_internals>/**"
          ]
        }
      ]
    }
  ```
  - Lưu ý là lúc run debug thì nó tự run `app.js` dùm mình nên đừng run trước bằng terminal nào cả nếu không sẽ bị đụng port. Có thể do mình đang dùng loại debug `Lauch Program` nó sẽ run bằng nodejs dùm mình cái app thay vì dùng bên thứ 3 (VD: conemu run app rồi debug bằng vscode chẳng hạn thì không được,...)

### 51. Using the Debugger

### 52. Restarting the Debugger Automatically After Editing our App

- Tài liệu debug nodejs với vscode - https://code.visualstudio.com/docs/nodejs/nodejs-debugging

- Để có thể khi code sửa thì debugger có thể auto restart thì ta phải tìm cách config cho nó sử dụng nodemon để run app, ta mở `lauch.json` lên và sửa ở config trên bổ sung thêm
  ```json
    {
      // Use IntelliSense to learn about possible attributes.
      // Hover to view descriptions of existing attributes.
      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Launch Program",
          "program": "${workspaceFolder}/app.js",
          "skipFiles": [
            "<node_internals>/**"
          ],
          "restart": true,
          "runtimeExecutable": "nodemon", // Config cho sử dụng nodemon để run
          "console": "integratedTerminal" // Config cho sử dụng bộ cửa sổ console nào để chạy lệnh, default sẽ là `internalConsole`
        }
      ]
    }
  ```
  - Lưu ý:
    - Cần cài nodemon thành global package trong máy để có thể run lệnh trong debugger được