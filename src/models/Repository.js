const { Model, DataTypes } = require('sequelize');

class Repository extends Model {
    static init (connection){
        super.init({
            github_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            full_name: DataTypes.STRING,
            description: DataTypes.STRING(1000),
            html_url: DataTypes.STRING,
            url: DataTypes.STRING,
            stargazers_count: DataTypes.INTEGER,
            forks_count: DataTypes.INTEGER,
            open_issues_count: DataTypes.INTEGER,
            language: DataTypes.STRING(100),
        },
        {
            sequelize: connection,
        });
    }
    
    static associate(models){
        this.belongsTo(models.Owner, { foreignKey: "owner_github_id", constraints: false, as: 'owner', targetKey: 'github_id'})
    }
}

module.exports = Repository;