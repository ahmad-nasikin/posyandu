'use strict'
const router = require('express').Router();
const db = require('../models');

router.get('/:ortuid', (req, res) => {
  db.OrangTua.findById(req.params.ortuid, {
    include : db.Bayi
  })
  .then(ortubayi => {
    res.render('parents', {ortubayi : ortubayi})
  })
})

module.exports = router
