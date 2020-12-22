const seedUsers = require("./user-seeds");
const seedBlogs = require("./blog-seeds");
const seedComments = require("./comment-seeds");
const sequelize = require("../config/connection");

// run the seed all with seedBlogs and seedComments commented out first and then place the generated UUID in the blog_user_id. Comment out seed users uncomment the seedBlogs and seedComments and seed again.
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedUsers();

    // await seedBlogs();

    // await seedComments();

    console.log("Tables Seeded");
    process.exit(0);
};

seedAll();
