# COURSE

## SECTION 09 - Dynamic Routes & Advanced Models

### 118. Extracting Dynamic Params

- Video hướng dẫn cách tạo router trang chi tiết sản phẩm
  - Để tạo router động ta dùng `:` để đặt tên biến ở router. Giống dispatcher của php phalcon
    - VD: `/products/:productId` 
      - Để lấy được param từ router ta dùng `req.params.productId`
