const Plugin = require("../plugin.js");

class Greetings extends Plugin {
  constructor(bot) {
    super("Greetings", bot);

    // initialize "say welcome"
    this.sayWelcome();

    // initialize "say bye"
    this.sayBye();
  }

  // Says welcome to people whenever they join
  sayWelcome() {
    this.bot.on("message", msg => {
      if (msg.new_chat_members == null || msg.new_chat_members.length == 0)
        return;

      let members = msg.new_chat_members;
      for (let member of members) {
        this.bot.sendMessage(msg.chat.id, `Welcome ${member.first_name}!`);
      }
    });
  }

  // Says bye when they leave
  sayBye() {
    this.bot.on("message", msg => {
      console.log(msg)
      if (msg.left_chat_member == null) return;

      const member = msg.left_chat_member;
      this.bot.sendMessage(msg.chat.id, `Bye ${member.first_name}!`);
    });
  }
}

module.exports = Greetings;
