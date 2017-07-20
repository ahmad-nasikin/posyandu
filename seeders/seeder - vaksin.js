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
    return queryInterface.bulkInsert('Vaksins' [{
      namavaksin : 'BCG',
      umurmin : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namavaksin : 'Campak',
      umurmin : 12,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namavaksin : 'DTP-1',
      umurmin : 18,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namavaksin : 'Hepatitis-A',
      umurmin : 18,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namavaksin : 'Hepatitis-B',
      umurmin : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namavaksin : 'Polio',
      umurmin : 2,
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
