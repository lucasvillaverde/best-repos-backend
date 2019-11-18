'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('repositories', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,          
        },
        github_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          unique: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        full_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING(1000),
        },
        html_url: {
          type: Sequelize.STRING,
          allowNull: false
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false
        },
        stargazers_count: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        forks_count: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        open_issues_count: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        language: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        owner_github_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: 'owners',
            key: 'github_id',
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
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
      return queryInterface.bulkDelete('repositories', {}, { truncate: true, restartIdentity: true } ).then(function(){
        queryInterface.dropTable('repositories');
      })
  }
};
