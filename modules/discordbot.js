const {Client, Attachment} = require('discord.js');
var token = "";

exports.setToken = function(data) {
  token = data;
}

exports.startBot = function(string, activityType, url) {
  if (token == null || token == ""){
    return cosole.log("[Discord] Can not start bot without token!")
  }
  const client = new Client();

  client.on('ready', () => {
          console.log('[CLIENT] Ready!');
          if (activityType == "STREAMING")
            client.user.setActivity(string, { type: activityType, url});
          else
            client.user.setActivity(string, { type: activityType});
  });

  exports.sendCommand = function(data) {
    console.log(data);
  }



  client.login(token);
  return client;
}
