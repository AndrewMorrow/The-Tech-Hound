const User = require("./User");
const Blog = require("./Blog");
const { DataTypes } = require("Sequelize");

Blog.belongsTo(User, {
    foreignKey: {
        name: "blog_userId",
        allowNull: false,
    },
});

User.hasMany(Blog, {
    foreignKey: {
        name: "blog_userId",
        onDelete: "CASCADE",
    },
});

module.exports = {
    User,
    Blog,
};
