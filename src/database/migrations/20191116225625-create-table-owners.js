'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('owners', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        github_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          unique: true
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        avatar_url: {
          type: Sequelize.STRING,
        },
        type: {
          type: Sequelize.STRING,
        },
        html_url: {
          type: Sequelize.STRING,
          allowNull: false
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false
        },
        site_admin: {
          type: Sequelize.BOOLEAN
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('owners', {}, { truncate: true, restartIdentity: true }).then(function(){
      queryInterface.dropTable('owners');
    })
  }
};
