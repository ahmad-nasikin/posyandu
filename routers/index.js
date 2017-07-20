'use strict'
const router = require('express').Router();



router.get('/', (req, res) => {
  console.log(req.session);
  res.render('index')
})

router.get('/login', (req, res) => {
  res.send('aaa')
})


module.exports = router
