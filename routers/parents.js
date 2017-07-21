'use strict'
const router = require('express').Router();
const db = require('../models');
const isivaksin = require('../helpers/isivaksin.js')
const age = require('../helpers/age.js')


// router.use((req,res, next)=>{
//   // console.log(req.session.role);
//   if (req.session.role == undefined) {
//     res.redirect('/');
//   } else if (req.session.role == 'Petugas' || req.session.role == 'Orangtua') {
//     next();
//   } else {
//     res.redirect('/')
//   }
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
    data.forEach(data => {
      data.umur = age(data.ttl)
    })
    // console.log(data[0].umur.umur);
    res.render('parents', {data : data})
  })
})


//tambah data baru
router.get('/:ortuid/add', (req, res) => {
  // res.send('tes')
  db.OrangTua.findById(req.params.ortuid)
  .then(data_ortu => {
    console.log(data_ortu);
    res.render('addbaby', {data_ortu : data_ortu})
  })
})

router.post('/:ortuid/add', (req, res) => {
  db.Bayi.create({
    namabayi   : req.body.namabayi,
    kelamin    : req.body.kelamin,
    OrangTuaId : req.params.ortuid,
    ttl        : req.body.ttl
  })
  .then(data_bayi => {
    // console.log(data_bayi);
    db.Vaksin.findAll()
    .then(data_vaksin => {
      // console.log(data_vaksin[0].id);
      let bulkVaksin = isivaksin(data_bayi.id, data_vaksin)
      db.BayiVaksin.bulkCreate(bulkVaksin)
      .then(() =>{
        res.redirect(`/parents/${req.params.ortuid}`)
      })
    })
  })
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
      data_bayi.umur = age(data_bayi.ttl)
      console.log(data_bayi);

      res.render('detailbaby', {data_bayi : data_bayi, data_vaksin : data_vaksin})
    })
  })
})




module.exports = router
