"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Result {
    constructor() {
        this.error = false;
    }
    getError() {
        return this.error;
    }
    setError(bool) {
        this.error = bool;
    }
    checkValue(obj) {
        if (isNaN(obj))
            return 'ERROR';
        return '';
    }
}
exports.Result = Result;
