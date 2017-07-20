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

// index orangtua
// view bayi dan petugas
router.get('/:ortuid', (req, res) => {
  db.Bayi.findAll({
    where : {
      OrangTuaId : req.params.ortuid
    },
    include : [db.Mantri, db.OrangTua],
    order : [['id', 'ASC']]
  })
  .then(data => {
    // console.log(data);
    res.render('parents', {data : data})
  })
})


//tambah data baru
router.get('/:ortuid/add', (req, res) => {
  res.send('tes')
})


// detail bayi
router.get('/:ortuid/:bayiid', (req, res) => {
  db.Bayi.findById(req.params.bayiid, {include : [db.Mantri, db.OrangTua]})
  .then(data_bayi => {
    db.BayiVaksin.findAll({
      where : {
        BayiId : req.params.bayiid
      },
      include : [db.Vaksin]
    })
    .then(data_vaksin => {
      // console.log(data_vaksin[1]);
      res.render('detailbaby', {data_bayi : data_bayi, data_vaksin : data_vaksin})
    })
  })
})



module.exports = router
