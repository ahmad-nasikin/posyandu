'use strict'
const router = require('express').Router();

router.get('/', (req, res) => {
  // res.render('index');
  res.send('aaa')
})

module.exports = router