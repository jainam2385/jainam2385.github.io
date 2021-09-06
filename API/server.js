const server = require("./app");
const port = parseInt(process.env.PORT) || 3000;

server.listen(port, (err) => {
    console.log("Serving @" + port);
    if (err) {
        console.log(err);
        process.exit(1);
    }
});
