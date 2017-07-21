'use strict'
const router = require('express').Router();
const db = require('../models');



router.get('/', (req, res) => {
  console.log(req.session);
  res.render('index')
})

router.get('/login', (req, res) => {
  // res.send('aaa')
  res.render('login')
})


router.post('/login', (req, res, next) => {
  // res.send('logged')
  db.User.findOne({
    where : {
      username : req.body.username
    }
  })
  .then(data => {
    console.log(data);

    if (data) {
      if (data.pass === req.body.pass) {
        req.session.user = data.username;
        req.session.role = data.role;
        res.redirect('/')
      }
    } else {
      res.redirect('/login')
    }
  })

})

router.get('/logout', (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('/login')
  })
})

module.exports = router
