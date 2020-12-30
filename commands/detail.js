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
class Detail extends command_1.default {
    Detail(triggered) {
        this.triggered = triggered;
        this.setEmbed();
    }
    runnable(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let term = msg.content.split(" ")[2];
            let results = yield helpers_1.detail(term);
            this.Embed.setDescription(results["description"])
                .setThumbnail(results["logo"])
                .setURL(results["url"])
                .setTitle(results["name"])
                .addFields({ name: '\u200B', value: '\u200B' }, { name: "Ceo", value: results["ceo"], inline: true }, { name: "Employees", value: results["employees"], inline: true }, { name: "Industry", value: results["industry"], inline: true }, { name: "Sector", value: results["sector"], inline: true }, { name: "Country", value: results["hq_country"], inline: true }, { name: "Symbol", value: results["symbol"], inline: true }, { name: "Address", value: results["hq_address"], inline: false }, { name: '\u200B', value: '\u200B' }).setFooter("With ❤️ by HexTheCode");
            yield msg.channel.send(this.Embed);
            this.setEmbed();
        });
    }
    setEmbed() {
        this.Embed = new Discord.MessageEmbed().setColor("#232cdb");
    }
}
exports.default = Detail;
