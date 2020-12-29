"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
class Today extends command_1.default {
    Today(triggered) {
        this.triggered = triggered;
    }
    runnable(msg) {
        msg.channel.send(`Today is ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
    }
}
exports.default = Today;
//# sourceMappingURL=today.js.map