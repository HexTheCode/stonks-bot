"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuperCommand {
    Trigger(ComprovationStr) {
        let cList = ComprovationStr.split(" ");
        this.cList = cList;
        let prefix = cList[0];
        if (prefix === this.triggered) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = SuperCommand;
