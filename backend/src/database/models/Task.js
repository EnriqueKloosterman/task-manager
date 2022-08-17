module.exports = (sequelize, DataTypes) => {
    let alias = "Task";

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task:{
            type: DataTypes.STRING
        },
        done: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: "task",
    };

    const Task = sequelize.define(alias, cols, config);

    Task.associate = (models) => {
        Task.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
        });
    }
    return Task;
}