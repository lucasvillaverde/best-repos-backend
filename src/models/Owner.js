const { Model, DataTypes } = require('sequelize');

class Owner extends Model {
    static init (connection){
        super.init({
            github_id: DataTypes.INTEGER,
            login: DataTypes.STRING,
            avatar_url: DataTypes.STRING,
            type: DataTypes.STRING,
            html_url: DataTypes.STRING,
            url: DataTypes.STRING,
            site_admin: DataTypes.BOOLEAN
        },
        {
            sequelize: connection,
        });
    }

    static associate(models){
        this.hasMany(models.Repository, { as: 'owner', foreignKey: "owner_github_id", sourceKey: "github_id", constraints: false });
    }
}

module.exports = Owner;