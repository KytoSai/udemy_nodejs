const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient
    .connect('mongodb+srv://user01:123123123@cluster0-1cukr.mongodb.net/test?retryWrites=true&w=majority')
    .then((client) => {
      console.log('Connected Mongodb')
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;