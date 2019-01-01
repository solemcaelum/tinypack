var exports = module.exports = {};
const {Client, Attachment} = require('discord.js');
var token = "";

exports.setToken = function(data) {
  token = data;
}

exports.startBot = function(string, activityType, url) {
  const client = new Client();

  client.on('ready', () => {
          console.log('[CLIENT] Ready!');
          if (activityType == "STREAMING")
            client.user.setActivity(string, { type: activityType, url});
          else
            client.user.setActivity(string, { type: activityType, url});
  });

  client.login(token);
}
