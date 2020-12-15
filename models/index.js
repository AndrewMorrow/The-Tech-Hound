const User = require("./User");
const Blog = require("./Blog");

Blog.belongsTo(User, {
    foreignKey: "blog_user",
});

User.hasMany(Blog, {
    foreignKey: "blog_user",
    onDelete: "CASCADE",
});

module.exports = {
    User,
    Blog,
};
