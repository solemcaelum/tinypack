var exports = module.exports = {};
const discordModule = require("./modules/discordbot.js");
const telegramModule = require("./modules/telegrambot.js");
var disc, tele = false;
var discordToken = "";
var telegramToken = "";
var playing, type, url = "";
exports.bots = function(discord, telegram) {
  if (discord == true) {
    disc = true;
  }
  if (telegram == true) {
    tele = true;
  }
}
exports.setDiscordToken = function(data){
  discordToken = data;
}
exports.setTelegramToken = function(data){
  telegramToken = data;
}
exports.setDiscordData = function(play, ty, ur){
  playing = play;
  ty = type;
  if (ur){
    url = ur;
  }
}
exports.instanceBots = function(){
  if (disc == true){
    discordModule.setToken(discordToken);
    discordModule.startBot(playing, type, url);
  }
  if (tele == true){
    telegramModule.setToken(telegramToken);
    telegramModule.startBot();
  }
}
