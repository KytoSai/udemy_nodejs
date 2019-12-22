const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
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
      .collection('user')
      .find({
        _id: new ObjectId(userId)
      })
      .next()
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;