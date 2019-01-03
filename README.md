# @CaramelDrop/tiny

[![](https://img.shields.io/npm/v/@carameldrop/tinypack.svg)](https://www.npmjs.com/package/@carameldrop/tinypack)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@carameldrop/tinypack.svg)](https://www.npmjs.com/package/@carameldrop/tinypack)
[![](https://img.shields.io/website-up-down-green-red/https/carm.ml.svg?label=Developer%20Website)](https://carm.ml/)

A collection of all the little modules I use.

## Install

```
$ npm install @carameldrop/tinypack
```

## Usage

Please refer to the documentation for Discord.JS and Telebot.
This module is not a replacement for either, it simply combines the two into one script.

Please remember to go into the Bot scripts in the modules folder, and modify them to your liking.
Whilst I would love to somehow be able to make some sort of Scripting Language so they can be,
programmed in the main file, I simply don't have the time.

```js
const tinypack = require("@carameldrop/tinypack");

//The first True enables the Discord Bot, and the Second enables the Telegram Bot.
tinypack.bots(true,true);

//Replace examples with your own tokens.
tinypack.setDiscordToken("INSERT-DISCORD-TOKEN");
tinypack.setTelegramToken("INSERT-TELEGRAM-TOKEN");

//Activity Types include "STREAMING", "PLAYING", "LISTENING", "WATCHING".
//URL is optional and only required for STREAMING.
tinypack.setDiscordData("Example Game", "STREAMING", "https://twitch.tv/username");

//Turns on the Bot instances.
tinypack.instanceBots();
```
