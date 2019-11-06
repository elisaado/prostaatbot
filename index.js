// By Eli Saado and contributors

// initialize debug logger
const log = require("debug")("prostaatbot:index");

log("Starting the engines");

// config
log("Initializing config...");
const config = require("./config.json");
log("Config initialized!");

// database
log("Initializing database...");
const db = require("./db.js");
log("Database initialized!");

// bot
log("Initializing bot API...");
const bot = require("./bot.js");
log("Bot API initialized!");

// plguins
log("Initializing plugins...");

const Greetings = require("./plugins/greetings.js");
const Ban = require("./plugins/ban.js");

const greetings = new Greetings();
const ban = new Ban();

log("Plugins initialized!");

log("Prostaatbot to your service!");
