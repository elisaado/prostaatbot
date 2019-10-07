const debug = require("debug");
const fetch = require("node-fetch");

const db = require("./db.js");
const bot = require("./bot.js");
const config = require("./config.js");

class Plugin {
  constructor(name) {
    this.log = debug(`prostaatbot:plugin:${name}`);
    this.db = db;
    this.bot = bot;
    this.fetch = fetch;
    this.config = config;

    this.log(`Initializing...`);
  }
}

module.exports = Plugin;
