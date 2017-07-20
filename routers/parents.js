'use strict'
const router = require('express').Router();
const db = require('../models');

// router.get('/:ortuid', (req, res) => {
//   db.OrangTua.findById(req.params.ortuid, {
//     include : db.Bayi,
//   })
//   .then(ortubayi => {
//     // console.log(JSON.stringify(ortubayi));
//     // console.log(ortubayi.Bayis[1]);
//     res.render('parents', {ortubayi : ortubayi})
//   })
// })

router.get('/:ortuid', (req, res) => {
  db.Bayi.findAll({
    where : {
      OrangTuaId : req.params.ortuid
    },
    include : db.Mantri
  })
  .then(data => {
    // console.log(data);
    res.render('parents', {data : data})
  })
})

module.exports = router
