'use strict';
module.exports = function(sequelize, DataTypes) {
  var OrangTua = sequelize.define('OrangTua', {
    namaortu: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return OrangTua;
};