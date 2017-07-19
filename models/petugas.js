'use strict';
module.exports = function(sequelize, DataTypes) {
  var Petugas = sequelize.define('Petugas', {
    namapetugas: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Petugas;
};