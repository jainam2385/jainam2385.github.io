class InternalServerError extends Error {
    PrintError;
    StatusCode;

    /**
     * @param {string} message
     * @param {boolean} [PrintError]
     */

    constructor(message, PrintError) {
        super(message);
        this.name = "InternalServerError";
        this.PrintError = PrintError;
        this.StatusCode = 500;
    }
}

module.exports = InternalServerError;
