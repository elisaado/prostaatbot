const TelegramBot = require("node-telegram-bot-api");
const config = require('./config.js');

const bot = new TelegramBot(config.token, { polling: true });

bot.onCommand = (command, description, handler) => {

}

module.exports = bot;
