class DatabaseError extends Error {
    PrintError;
    StatusCode = 503;
    name = "DatabaseError";

    constructor(message, PrintError) {
        super(message);
        this.PrintError = PrintError;
    }
}

module.exports = DatabaseError;
