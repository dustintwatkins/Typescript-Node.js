"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trim {
    constructor(word) {
        this.str = word;
    }
    processString() {
        this.str = this.str.trim();
    }
}
exports.Trim = Trim;
