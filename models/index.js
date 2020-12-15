const User = require("./User");
const Blog = require("./Blog");
const { DataTypes } = require("sequelize");

Blog.belongsTo(User, {
    foreignKey: {
        name: "blog_user",
        type: DataTypes.STRING,
    },
});

User.hasMany(Blog, {
    foreignKey: {
        name: "blog_user",
        type: DataTypes.STRING,
    },
    onDelete: "CASCADE",
});

module.exports = {
    User,
    Blog,
};
