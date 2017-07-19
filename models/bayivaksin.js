'use strict';
module.exports = function(sequelize, DataTypes) {
  var BayiVaksin = sequelize.define('BayiVaksin', {
    BayiId: DataTypes.INTEGER,
    VaksinId: DataTypes.INTEGER,
    sudah: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BayiVaksin;
};