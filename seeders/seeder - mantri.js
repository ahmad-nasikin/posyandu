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
    return queryInterface.bulkInsert('Mantris', [{
      namamantri : 'Rudy Sutanto',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namamantri : 'Nurlaili Rachmawati',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namamantri : 'Wawan Setiawan',
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
