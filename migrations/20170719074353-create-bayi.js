'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Bayis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namabayi: {
        type: Sequelize.STRING
      },
      kelamin: {
        type: Sequelize.STRING
      },
      ttl: {
        type: Sequelize.DATEONLY
      },
      OrangTuaId: {
        type: Sequelize.INTEGER
      },
      MantriId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Bayis');
  }
};
