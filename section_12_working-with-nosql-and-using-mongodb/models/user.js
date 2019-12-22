const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = (cart)? cart : { items: [] };
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
}

module.exports = User;