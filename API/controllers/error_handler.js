const errorHandler = (err, req, res, next) => {
    if (!global.isProduction) console.log(err);

    return res
        .status(500)
        .send({ failed: true, message: "Internal Server Error" });
};

module.exports = errorHandler;
