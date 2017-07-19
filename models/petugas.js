'use strict';
module.exports = function(sequelize, DataTypes) {
  var Petugas = sequelize.define('Petugas', {
    namapetugas: DataTypes.STRING
  });

  Petugas.associate = models => {
    Petugas.hasOne(models.User);
    Petugas.hasMany(models.Bayi);
  };

  return Petugas;
};