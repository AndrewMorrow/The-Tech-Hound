const { Model, DataTypes, Sequelize } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Blog extends Model {}

Blog.init({
    blog_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    blog_title: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [10, 80],
            isAlphanumeric: true,
            notNull: {
                msg: "Please enter a title for the post",
            },
        },
    },

    blog_body: {
        type: DataTypes.STRING(400),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [10, 400],
            notNull: {
                msg: "Please enter a body for the post",
            },
        },
    },

    blog_user: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: "user",
            key: "user_name",
        },
        validate: {
            notEmpty: true,
        },
    },
});
