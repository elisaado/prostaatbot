const Plugin = require("../plugin.js");
const admin = require("../common/admin.js");

class Ban extends Plugin {
  constructor(bot) {
    super("Ban", bot);

    // initialize ban
    this.ban();

    // initialize unban
    this.unban();
  }

  // Bans people
  ban() {
    this.bot.onText(/^\/ban$/, msg => {
      console.log("uwu");
      admin
        .botAdmin({ config: this.config, bot: this.bot, chat_id: msg.chat.id })
        .then(() => {
          this.bot.sendMessage(msg.chat.id, `I am admin!`);
        })
        .catch(() => {
          this.bot.sendMessage(msg.chat.id, `I am cancer!`);
        });
    });
  }

  // Unbans people
  unban() {
    // this.bot.on("message", msg => {
    //   if (msg.left_chat_member == null) return;
    //   const member = msg.left_chat_member;
    //   this.bot.sendMessage(msg.chat.id, `Bye ${member.first_name}!`);
    // });
  }
}

module.exports = Ban;
