/*

This test simply makes a Discord Bot and Telegram bot use the same commands and database.

~=<BOT SETUP>=~

Please remember to go into the Bot scripts in the modules folder, and modify them to your liking.
Whilst I would love to somehow be able to make some sort of Scripting Language so they can be,
programmed in the main file, I simply don't have the time.

DISCORD AND TELEGRAM KEYS LEFT IN HERE ARE INVALID. PLEASE REPLACE WITH YOUR OWN.

*/
const tinypack = require("../");
tinypack.bots(true,true);
tinypack.setDiscordToken("NTI5NzUwOTUxODAwNjAyNjM3.Dw1Yvw.57LdJyB2Y0U5NBOdSZ3u1G6yNyQ");
tinypack.setTelegramToken("774316097:AAFN6ayj4VcpmydgFs7Iuc9D8Hiegw-egyE");
tinypack.setDiscordData("my flank~", "STREAMING", "https://twitch.tv/fillyanon");
tinypack.instanceBots();
