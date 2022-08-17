

module.exports = (sequelize, DataTypes) => {
    let alias = "User";

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIcrement: true
        },
        name:{
            type: DataTypes.STRING
        },
        pasword:{
            type: DataTypes.STRING
        },
        img:{
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: "user",
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.hasMany(models.Task, {
            as: "task",
            foreignKey: "user_id"
        })
    }
    return User;
}