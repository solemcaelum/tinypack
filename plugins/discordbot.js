const {Client, Attachment} = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)
db.defaults({ commandNumber: [], command: [], function: {} })
  .write()
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
            client.user.setActivity(string, { type: activityType});
  });

  exports.sendCommand = function(data) {
    console.log(data);
  }



  client.login(token);
  return client;
}
