"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var commands = require("./commands/commands");
require("dotenv").config();

var Cliente = new discord_js_1.Client();
Cliente.login(process.env.TOKEN);
Cliente.on("ready", function () {
  console.log("Oh master I'm alive 🤖🤖🤖");
});

Cliente.on("message", function (msg) {
  if (msg.author.username !== "stonks-bot") {
    //let prefix = msg.content.split(" ");
    //console.log(prefix[0]);

    for (var i = 0; i < commands.length; i++) {
      if (commands[i].Trigger(msg.content)) {
        commands[i].runnable(msg);
        return;
      }
    }
  }
});
