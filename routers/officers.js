'use strict'
const router = require('express').Router();
const db = require('../models');
const age = require('../helpers/age.js')

// index all officers, view all
router.get('/', (req, res) => {
  // res.render('allbaby')
  db.Bayi.findAll({
    include : [db.Mantri, db.OrangTua],
    order : [['namabayi', 'ASC']]
  })
  .then(data_bayi => {
    data_bayi.forEach(data => {
      data.umur = age(data.ttl)
    })
    res.render('allbaby', {data_bayi : data_bayi})
  })
})


// index one officer, view all patients
router.get('/:ptid', (req, res) => {
  // res.send('/officers/:ptid')
  db.Mantri.findOne({
    where : {
      id : req.params.ptid
    },
    include : [db.Bayi]
  })
  .then(data_bayi => {
    data_bayi.Bayis.forEach(data => {
      data.umur = age(data.ttl)
    })
    // console.log(data_bayi);
    res.render('officerbaby', {data_bayi : data_bayi})
  })
})

// assign petugas ke bayi
router.get('/assign/:bayiid', (req, res) => {
  // res.send('assign petugas')
  db.Bayi.findById(req.params.bayiid, {include : [db.OrangTua]})
  .then(data_bayi => {
    // console.log(data_bayi);
    db.Mantri.findAll()
    .then(data_mantri => {
      res.render('assignofficer', {data_bayi : data_bayi, data_mantri : data_mantri})
    })
  })
})

router.post('/assign/:bayiid', (req, res) => {
  // res.send('assign bayi ke petugas')
  db.Bayi.update({
    MantriId : req.body.MantriId
  }, {
    where : {
      id : req.params.bayiid
    }
  })
  .then(() => {
    res.redirect('/officers')
  })
})


//detail bayi
router.get('/:ptid/:bayiid', (req, res) => {
  db.Bayi.findById(req.params.bayiid, {include : [db.Mantri, db.OrangTua]})
  .then(data_bayi => {
    data_bayi.umur = age(data_bayi.ttl)
    console.log(data_bayi);
    db.BayiVaksin.findAll({
      where : {
        BayiId : req.params.bayiid
      },
      include : [db.Vaksin]
    })
    .then(data_vaksin => {
      // console.log(data_vaksin);
      res.render('officerbabydetail', {data_bayi : data_bayi, data_vaksin : data_vaksin})
    })
  })
})

router.get('/:ptid/:bayiid/:vakid', (req, res) => {
  // res.send('aaa')
  db.BayiVaksin.update({
    sudah : 1
  }, {
    where : {
      BayiId : req.params.bayiid,
      VaksinId : req.params.vakid
    }
  })
  .then(() => {
    res.redirect(`/officers/${req.params.ptid}/${req.params.bayiid}`)
  })
})



module.exports = router
