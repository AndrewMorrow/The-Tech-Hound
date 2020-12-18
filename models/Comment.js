const { Model, DataTypes, Sequelize } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },

        comment_body: {
            type: DataTypes.STRING(400),
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [10, 400],
                notNull: {
                    msg: "Please enter a body for the comment",
                },
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);

module.exports = Comment;
