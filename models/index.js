const User = require("./User");
const Blog = require("./Blog");
const { DataTypes } = require("sequelize");

Blog.belongsTo(User, {
    foreignKey: {
        name: "blog_user",
        type: DataTypes.UUID,
    },
});

User.hasMany(Blog, {
    foreignKey: {
        name: "blog_user",
        type: DataTypes.UUID,
    },
    onDelete: "CASCADE",
});

module.exports = {
    User,
    Blog,
};
