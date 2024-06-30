'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lapangans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_owner: {
        type: Sequelize.STRING
      },
      nama_lapangan: {
        type: Sequelize.STRING
      },
      tipe_lapangan: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      foto: {
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
    await queryInterface.dropTable('lapangans');
  }
};