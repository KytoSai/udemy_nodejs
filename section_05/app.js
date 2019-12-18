const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false // Từ bản mới bodyParser bắt thêm option này mới chạy
}));

app.use('/', (req, res, next) => {
  // console.log('==== This always run! ==== ');
  next();
});

app.use('/add-product', (req, res, next) => {
  // console.log('==== [Middleware] /add-product ====');
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title"/>
      <button type="submit">Add product</button>
    </form>  
  `)
});

app.use('/product', (req, res, next) => {
  // console.log('==== [Middleware] /product ====');
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  // console.log('==== [Middleware] / ====');
  res.send(`
    <h1>Hello expressjs</h1>
  `)
});

app.listen(3000);
