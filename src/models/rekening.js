'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rekening extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rekening.init({
    nama_bank: DataTypes.STRING,
    cabang_bank: DataTypes.STRING,
    kota_kabupaten: DataTypes.STRING,
    nama: DataTypes.STRING,
    no_rekening: DataTypes.STRING,
    atas_nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rekening',
    underscored: true,
  });
  return rekening;
};