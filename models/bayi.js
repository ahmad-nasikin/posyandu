'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bayi = sequelize.define('Bayi', {
    namabayi: DataTypes.STRING,
    kelamin: DataTypes.STRING,
    ttl: DataTypes.DATE,
    OrtuId: DataTypes.INTEGER,
    PetugasId: DataTypes.INTEGER
  });

  Bayi.associate = models => {
    Bayi.belongsTo(models.OrangTua);
    Bayi.belongsTo(models.Petugas);
    Bayi.belongsToMany(models.Vaksin, { through :
      'BayiVaksin'
    });
  };

  return Bayi;
};
