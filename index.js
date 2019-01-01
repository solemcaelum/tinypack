var exports = module.exports = {};
const {Client, Attachment} = require('discord.js');
var token = "";

exports.setToken = function(data) {
  token = data;
}

exports.startBot = function{
  const client = new Client();

  client.on('ready', () => {
          console.log('[CLIENT] Ready!');
          client.user.setActivity("packets", { type: "STREAMING", url: "https://www.twitch.tv/fillyanon" })
  });

  client.login(token);
}
