// check whether or not this bot is admin in the chat
function botAdmin({ config, bot, chat_id }) {
  return bot.getChatAdministrators(chat_id).then(admins => {
    return new Promise((resolve, reject) => {
      admins.forEach(admin => {
        console.log(admin.user.username, config.username);
        if (admin.user.username === config.username) resolve(true);
      });

      reject();
    });
  });
}

module.exports = {
  botAdmin
};
