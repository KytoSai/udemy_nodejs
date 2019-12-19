const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(title)  {
    this.title = title;
  }

  save() {
    const self = this;

    const filePath = path.join(
      path.dirname(process.mainModule.filename), 
      'data', 
      'products.json'
    );

    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if(!err) { 
        products = JSON.parse(fileContent);
      }

      products.push(self);
      fs.writeFileSync(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const filePath = path.join(
      path.dirname(process.mainModule.filename), 
      'data', 
      'products.json'
    );
    
    // Vì readFile là async function nên phải sử dụng callback để trả data 
    fs.readFile(filePath, (err, fileContent) => {
      if(err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
}