const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
  extended: false
}));


app.use('/admin',adminRoutes);
app.use(shopRoutes);

// CREATE PAGE 404
app.use('/',(req, res, next) => {
  res
    .status(404) // quan trọng cần phải set status 404 cho page này
    .sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);
