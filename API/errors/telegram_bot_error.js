class TelegramBotError extends Error {
    PrintError;
    StatusCode = 500;
    name = "TelegramBotError";

    constructor(message, PrintError) {
        super(message);
        this.PrintError = PrintError;
    }
}

module.exports = TelegramBotError;
