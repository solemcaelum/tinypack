const TeleBot = require('telebot');
var token = "";

const BUTTONS = {
    hello: {
        label: 'Hello',
        command: '/hello'
    }
};

exports.setToken = function(data) {
  token = data;
}

exports.startBot = function(string, activityType, url) {
  if (token == null || token == ""){
    return cosole.log("[Telegram] Can not start bot without token!")
  }
  const bot = new TeleBot({
      token: token, // Required. Telegram Bot API token.
      usePlugins: ['namedButtons'],
      pluginConfig: {
          namedButtons: {
              buttons: BUTTONS
          }
  }
  });

  bot.on('text', (msg) => console.log(msg.text));


  exports.sendCommand = function(data) {
    console.log(data);
  }



  bot.start();
  return bot;
}
