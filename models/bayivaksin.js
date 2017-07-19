'use strict';
module.exports = function(sequelize, DataTypes) {
  var BayiVaksin = sequelize.define('BayiVaksin', {
    BayiId: DataTypes.INTEGER,
    VaksinId: DataTypes.INTEGER,
    sudah: DataTypes.BOOLEAN
  });

  BayiVaksin.associate = models => {
    BayiVaksin.belongsTo(models.Bayi);
    BayiVaksin.belongsTo(models.Vaksin);
  };

  return BayiVaksin;
};