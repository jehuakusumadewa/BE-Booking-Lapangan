'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rekenings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_bank: {
        type: Sequelize.STRING
      },
      cabang_bank: {
        type: Sequelize.STRING
      },
      kota_kabupaten: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      no_rekening: {
        type: Sequelize.STRING
      },
      atas_nama: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rekenings');
  }
};