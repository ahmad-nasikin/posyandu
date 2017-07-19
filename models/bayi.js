'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bayi = sequelize.define('Bayi', {
    namabayi: DataTypes.STRING,
    kelamin: DataTypes.STRING,
    ttl: DataTypes.DATE,
    OrtuId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bayi;
};