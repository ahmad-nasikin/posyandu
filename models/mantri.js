'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mantri = sequelize.define('Mantri', {
    namamantri: DataTypes.STRING
  });

  Mantri.associate = models => {
    Mantri.hasOne(models.User);
    Mantri.hasMany(models.Bayi);
  };

  return Mantri;
};