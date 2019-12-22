const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5dff18fdd933de4818ade30f')
    .then(user => {
      // ! Chưa hiểu lắm dòng này ?? tại sao lại cần gán lại vào req.user ? Có phải gán lại vầy thì các chỗ middleware (controller, router,..) tiếp theo có thể lôi ra dạn `req.user` để lấy data không ?
      req.user = user; 
      next();
    })
    .catch(err => console.log(err));
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
