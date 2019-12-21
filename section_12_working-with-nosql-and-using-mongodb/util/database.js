const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db = null; // _ private variable

const mongoConnect = (callback) => {
  MongoClient
    .connect('mongodb+srv://user01:123123123@cluster0-1cukr.mongodb.net/shop?retryWrites=true&w=majority')
    .then((client) => {
      console.log('Connected Mongodb')
      _db = client.db(); // Lưu lại connect tới db để tái sử dụng thay vì mỗi lần cần dùng lại phải connect db lần nữa
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db) {
    return _db;
  }

  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;