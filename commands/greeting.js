"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
class Greeting extends command_1.default {
    constructor() {
        super(...arguments);
        this.greetingReplies = ["Whats up", "All my hommies say Ey", "Hi", "Hello"];
    }
    Greeting(triggered) {
        this.triggered = triggered;
    }
    runnable(msg) {
        let index = Math.floor(Math.random() * this.greetingReplies.length);
        let str = this.greetingReplies[index];
        msg.channel.send(`${str} ${msg.author.username} 🤖`);
    }
}
exports.default = Greeting;
