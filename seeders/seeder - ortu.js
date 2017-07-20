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
    return queryInterface.bulkInsert('OrangTuas', [{
      namaortu : 'Bambang Lestari Widodo',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namaortu : 'Made Wirawan',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namaortu : 'Rahadie Surya',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namaortu : 'Rahmad Didik Purwanto',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namaortu : 'Agus Sunarko',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namaortu : 'Anwar Rifai',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namaortu : 'Emmy Dyah',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
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
