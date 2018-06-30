"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LowerCase {
    constructor(word) {
        this.str = word;
    }
    processString() {
        this.str = this.str.toLowerCase();
    }
}
exports.LowerCase = LowerCase;
