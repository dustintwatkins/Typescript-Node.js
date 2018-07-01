"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LowerCase {
    constructor(word) {
        this.str = word;
    }
    static getInstance(word) {
        if (!LowerCase.instance)
            LowerCase.instance = new LowerCase(word);
        return LowerCase.instance;
    }
    processString() {
        this.str = this.str.toLowerCase();
    }
}
exports.LowerCase = LowerCase;
