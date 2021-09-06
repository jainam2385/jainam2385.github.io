const TelegramBot = require("node-telegram-bot-api");
const TelegramBotError = require("../errors/telegram_bot_error");
const portfolioRouter = require("express").Router();

portfolioRouter.post("/", async (req, res, next) => {
    try {
        const { name, contact, message } = req.body;

        const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
            polling: true,
        });

        // Forwarding messages to telegram group via telegram bot
        await bot.sendMessage(
            process.env.TELEGRAM_CHAT_ID,

            `Name: ${name}\nContact: ${contact}\nMessage: ${message}\nDate: ${Date()}\nIP: ${
                req.ip
            }
            `
        );

        return res.status(200).json({
            failed: false,
        });
    } catch (err) {
        return next(new TelegramBotError("Telegram bot not working"));
    }
});

module.exports = portfolioRouter;
