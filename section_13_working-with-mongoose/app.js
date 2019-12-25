const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Khởi tạo một middleware để có thể lấy thông tin user làm các việc khác
app.use((req, res, next) => {
  User
    .findById('5e039dc3f4553038d07292c6')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://user01:123123123@cluster0-1cukr.mongodb.net/udemy_section13_shop?retryWrites=true&w=majority'
  )
  .then(result => {
    console.log('==== [Connected !] ====')

    // Tìm xem có tồn tại user nào trong db chưa, chưa có thì tạo
    if(User.findOne().then(user => {
      if(!user) {
        const user = new User({
          name: 'Test',
          email: 'test@gmail.com',
          cart: {
            items: [],
          },
        });

        user.save()
      }
    }))
    
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
