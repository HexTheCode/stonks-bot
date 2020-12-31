"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
const helpers_1 = require("../utils/helpers");
const Discord = require("discord.js");
class News extends command_1.default {
    News(triggered) {
        this.triggered = triggered;
        this.setEmbed();
    }
    runnable(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let term = msg.content.split(" ")[2];
            let results = yield helpers_1.news(term);
            this.Embed
                .setTitle(results["title"])
                .setURL(results["url"])
                .setDescription(results["summary"])
                .setThumbnail(results["image"])
                .setTimestamp(results["timestamp"])
                .setFooter("With ❤️ by HexTheCode");
            yield msg.channel.send(this.Embed);
            this.setEmbed();
        });
    }
    setEmbed() {
        this.Embed = new Discord.MessageEmbed().setColor("#232cdb");
    }
}
exports.default = News;
