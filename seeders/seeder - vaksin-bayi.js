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
    return queryInterface.bulkInsert('BayiVaksins', [{
      BayiId   : 1,
      VaksinId : 1,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 1,
      VaksinId : 2,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 1,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 1,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 1,
      VaksinId : 5,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 1,
      VaksinId : 6,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 2,
      VaksinId : 1,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 2,
      VaksinId : 2,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 2,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 2,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 2,
      VaksinId : 5,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 2,
      VaksinId : 6,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 3,
      VaksinId : 1,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 3,
      VaksinId : 2,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 3,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 3,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 3,
      VaksinId : 5,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 3,
      VaksinId : 6,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 4,
      VaksinId : 1,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 4,
      VaksinId : 2,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 4,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 4,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 4,
      VaksinId : 5,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 4,
      VaksinId : 6,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 5,
      VaksinId : 1,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 5,
      VaksinId : 2,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 5,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 5,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 5,
      VaksinId : 5,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 5,
      VaksinId : 6,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 6,
      VaksinId : 1,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 6,
      VaksinId : 2,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 6,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 6,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 6,
      VaksinId : 5,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 6,
      VaksinId : 6,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 7,
      VaksinId : 1,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 7,
      VaksinId : 2,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 7,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 7,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 7,
      VaksinId : 5,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 7,
      VaksinId : 6,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 8,
      VaksinId : 1,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 8,
      VaksinId : 2,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 8,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 8,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 8,
      VaksinId : 5,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 8,
      VaksinId : 6,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 9,
      VaksinId : 1,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 9,
      VaksinId : 2,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 9,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 9,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 9,
      VaksinId : 5,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 9,
      VaksinId : 6,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 10,
      VaksinId : 1,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 10,
      VaksinId : 2,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 10,
      VaksinId : 3,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 10,
      VaksinId : 4,
      sudah    : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 10,
      VaksinId : 5,
      sudah    : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      BayiId   : 10,
      VaksinId : 6,
      sudah    : 1,
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
