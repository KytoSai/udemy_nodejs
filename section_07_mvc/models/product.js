const fs = require('fs');
const path = require('path');

const filePath = path.join(
  path.dirname(process.mainModule.filename), 
  'data', 
  'products.json'
);

const getProductsFromFile = (cb) => {
  // Vì readFile là async function nên phải sử dụng callback để trả data 
  fs.readFile(filePath, (err, fileContent) => {
    if(err) {
      return cb([]);
    }
      
    return cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title)  {
    this.title = title;
  }

  save() {
    const self = this;

    getProductsFromFile((products) => {
      products.push(self);
      fs.writeFileSync(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}