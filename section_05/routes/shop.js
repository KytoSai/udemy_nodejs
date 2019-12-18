const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('==== [Middleware] / ====');
  res.send(`
    <h1>Hello expressjs</h1>
  `)
});


module.exports = router;