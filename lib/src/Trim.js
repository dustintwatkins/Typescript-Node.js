"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trim {
    constructor(word) {
        this.str = word;
    }
    static getInstance(word) {
        if (!Trim.instance)
            Trim.instance = new Trim(word);
        return Trim.instance;
    }
    processString() {
        this.str = this.str.trim();
    }
}
exports.Trim = Trim;
