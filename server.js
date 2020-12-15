const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./controllers");
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const app = express();
const hbs = exphbs.create();

// view engine setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

// turn on connection to db and server
sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () =>
        console.log(`Now listening at http://localhost:${PORT}`)
    );
});
