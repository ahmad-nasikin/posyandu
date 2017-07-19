'use strict';
module.exports = function(sequelize, DataTypes) {
  var OrangTua = sequelize.define('OrangTua', {
    namaortu: DataTypes.STRING
  });

  OrangTua.associate = models => {
    OrangTua.hasMany(models.Bayi);
    OrangTua.hasOne(models.User);
  };

  return OrangTua;
};