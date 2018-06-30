"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Result_1 = require("./Result");
class ParseInt {
    constructor(word) {
        this.str = word;
        this.num = 0;
        this.res = new Result_1.Result();
        this.errorString = '';
    }
    processString() {
        this.errorString = this.res.checkValue(this.str);
        if (this.errorString !== '')
            return;
        else
            this.num = parseInt(this.str);
    }
}
exports.ParseInt = ParseInt;
