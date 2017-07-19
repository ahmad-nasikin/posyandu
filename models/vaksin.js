'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vaksin = sequelize.define('Vaksin', {
    namavaksin: DataTypes.STRING,
    umurmin: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Vaksin;
};