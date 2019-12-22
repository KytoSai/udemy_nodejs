const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = (cart)? cart : { items: [] }; // Tạo cấu trúc trường hợp rỗng để tránh bug khi user chưa tồn tại giỏ hàng
    this._id = id;
  }

  save() {  
    const db = getDb();
    return db
      .collection('user')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .find({
        _id: new ObjectId(userId)
      })
      .next()
      .then(user => {
        console.log('[user]',user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }

  addToCart(product) {
    // Tìm sản phẩm xem tồn tại trước đó trong giỏ hàng chưa
    const cartProductIndex = this.cart.items.findIndex(cp => { // cp ~ cartProduct
      return cp.productId.toString() == product._id.toString();
    });
    
    const updateCartItems = [...this.cart.items];
    let newQuantity = 1;

    if(cartProductIndex >= 0) { // Sản phẩm đã tồn tại trong giỏ hàng
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updateCartItems[cartProductIndex].quantity = newQuantity;
    } else { // Sản phẩm chưa tồn tại trong giỏ hàng
      updateCartItems.push({
        productId: new ObjectId(product._id), 
        quantity: newQuantity,
      })
    }
    
    const updatedCart = { 
      items: updateCartItems,
    };

    const db = getDb();
    return db
      .collection('users')
      .updateOne({
        _id: new ObjectId(this._id),
      },{
        $set: {
          cart: updatedCart,
        },
      })
      .then()
      .catch(err => {
        console.log(err);
      })
  }

  getCart() {
    const db = getDb();
    const self = this;

    // Lấy tất cả product Id có trong giỏ hàng của user
    const productIds = self.cart.items.map(i => {
      return i.productId;
    });

    return db
      .collection('products') // Dựa vào collection `products` tìm những sản phẩm có id trong cart của user
      .find({
        _id: {
          $in: productIds
        }
      })
      .toArray()
      .then(products => {
        return products.map(p => { // Format lại để trả data
          return {
            ...p,
            quantity: self.cart.items.find(i => { // Vì data product của collection `products` không có thông tin quantity nên cần bổ sung khi trả ra
              return i.productId.toString() === p._id.toString();
            }).quantity,
          };
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteItemFormCart(productId) {
    const self = this;
    const updateCartItems = self.cart.items.filter((item) => {
      return item.productId.toString() !== productId.toString();
    });

    const db = getDb();
    return db
      .collection('users')
      .updateOne({
        _id: new ObjectId(self._id),
      },{
        $set: {
          cart: {
            items: updateCartItems
          },
        },
      })
      .then()
      .catch(err => {
        console.log(err);
      })
  }

  getOrders() {
    const self = this;
    const db = getDb();

    return db
      .collection('orders')
      .find({
        'user._id': new ObjectId(self._id)
      })
      .toArray()
      .then(orders => {
        return orders
      });    
  }

  addOrder() {
    const self = this;
    const db = getDb();
    
    /*
      Thay vì lấy bằng self.cart thì gọi request để đảm bảo data là mới nhất
    */
    return self.getCart()
      .then(products => {
        const order = {
          items: products,
          user: {
            _id: new ObjectId(self._id),
            name: self.name,
          },
        };

        return db
          .collection('orders')
          .insertOne(order)
      })
      .then(result => {
        self.cart = { items: [] }; // Lưu giỏ hàng rỗng vào class user hiện tại
        
        // Xóa giỏ hàng trong collection 
        return db
          .collection('users')
          .updateOne({
            _id: new ObjectId(self._id)
          },{
            $set: {
              cart: { items: [] }
            }
          })
      })
  }// addOrder()
}

module.exports = User;