require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./controllers/error_handler");
const NotFoundError = require("./errors/not_found_error");
const portfolioRouter = require("./routes/portfolio");

global.isProduction = process.env.NODE_ENV === "production";

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(process.env.BASE_URL, portfolioRouter);

app.all("*", (req, res, next) => {
    return next(new NotFoundError("Route does not exist"));
});

app.use(errorHandler);

module.exports = app;
