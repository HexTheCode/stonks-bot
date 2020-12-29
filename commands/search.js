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
class Search extends command_1.default {
    Search(triggered) {
        this.triggered = triggered;
    }
    runnable(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let term = msg.content.split(" ")[2];
            let results = yield helpers_1.search(term);
            yield msg.channel.send("Searching 🔍 ...");
            for (let i = 0; i < results.length; i++) {
                yield msg.channel.send("  -Name: " + results[i]["name"] + " / Symbol: " + results[i]["ticker"] + " / Market: " + results[i]["market"]);
            }
        });
    }
}
exports.default = Search;
//# sourceMappingURL=search.js.map