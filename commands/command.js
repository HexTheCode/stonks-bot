"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    Trigger(ComprovationStr) {
        if (ComprovationStr === this.triggered) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = Command;
