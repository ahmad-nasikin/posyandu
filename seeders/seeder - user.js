'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username : 'rudy',
      pass     : 'sutanto',
      role     : 'Petugas',
      PetugasId: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'nurlaili',
      pass     : 'rachmawati',
      role     : 'Petugas',
      PetugasId: 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'wawan',
      pass     : 'setiawan',
      role     : 'Petugas',
      PetugasId: 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'bambang',
      pass     : 'lestari',
      role     : 'Orangtua',
      OrtuId   : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'made',
      pass     : 'wirawan',
      role     : 'Orangtua',
      OrtuId   : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'rahadie',
      pass     : 'surya',
      role     : 'Orangtua',
      OrtuId   : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'rahmad',
      pass     : 'didik',
      role     : 'Orangtua',
      OrtuId   : 4,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'agus',
      pass     : 'sunarko',
      role     : 'Orangtua',
      OrtuId   : 5,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'anwar',
      pass     : 'rifai',
      role     : 'Orangtua',
      OrtuId   : 6,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'emmy',
      pass     : 'dyah',
      role     : 'Orangtua',
      OrtuId   : 7,
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
