'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mantri = sequelize.define('Mantri', {
    namapetugas: DataTypes.STRING
  });

  Petugas.associate = models => {
    Mantri.hasOne(models.User);
    Mantri.hasMany(models.Bayi);
  };

  return Mantri;
};