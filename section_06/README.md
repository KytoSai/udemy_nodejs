# NOTE

# COURSE

## Section 06 - Working with Dynamic Content & Adding Templating Engines

- Ở bài này sẽ lượt bỏ qua không làm phần templtae engine pug và handlebar vì các video sau hướng dẫn toàn dùng ejs
- Chủ yếu 2 lệnh chính để set engine ta sẽ
  - Install ejs `yarn add ejs`
  - Setup code
    ```javascript
      app.set('view engine','ejs'); // Set loại engine sử dụng
      app.set('views','views'); // Set thw mực view
    ```