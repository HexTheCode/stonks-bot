"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const superCommand_1 = require("./superCommand");
const search_1 = require("./search");
const detail_1 = require("./detail");
const news_1 = require("./news");
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
        const news = new news_1.default();
        news.News("news");
        this.subcommands.push(news);
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
