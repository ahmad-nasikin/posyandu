'use strict'
const router = require('express').Router();
const db = require('../models');

// index officers, view all
router.get('/', (req, res) => {
  // res.render('allbaby')
  db.Bayi.findAll({
    include : [db.Mantri, db.OrangTua],
    order : [['namabayi', 'ASC']]
  })
  .then(data_bayi => {
    res.render('allbaby', {data_bayi : data_bayi})
  })
})

module.exports = router
