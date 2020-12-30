"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const superCommand_1 = require("./superCommand");
const search_1 = require("./search");
const detail_1 = require("./detail");
class Stonk extends superCommand_1.default {
    constructor() {
        super(...arguments);
        this.subcommands = [];
    }
    Stonk(triggered) {
        this.triggered = triggered;
        const search = new search_1.default();
        search.Search("search");
        const detail = new detail_1.default();
        detail.Detail("detail");
        this.subcommands.push(search);
        this.subcommands.push(detail);
    }
    runnable(msg) {
        for (let i = 0; i < this.subcommands.length; i++) {
            if (this.subcommands[i].Trigger(this.cList[1])) {
                this.subcommands[i].runnable(msg);
                return;
            }
        }
    }
}
exports.default = Stonk;
