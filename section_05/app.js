const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(adminRoutes);
app.use(shopRoutes);

// CREATE PAGE 404
app.use('/',(req, res, next) => {
  res
    .status(404) // quan trọng cần phải set status 404 cho page này
    .send(`
      <h1>Page not found</h1>
    `)
});


app.listen(3000);
