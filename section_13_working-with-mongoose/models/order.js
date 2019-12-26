const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      product: { // Khi lưu sẽ lưu vào đây productId dùng để mapping tới data của collection products
        type: Object,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      }
    }
  ],
  user: {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model('Order', orderSchema);