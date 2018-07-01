"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LowerCase_1 = require("./LowerCase");
const Trim_1 = require("./Trim");
const ParseInt_1 = require("./ParseInt");
class GenericCommand {
    constructor(className, paramVals) {
        this._className = className;
        this._paramVal = paramVals;
        this.initializeClass();
    }
    initializeClass() {
        if (this._className === 'LowerCase')
            this._classObj = new LowerCase_1.LowerCase(this._paramVal);
        else if (this._className === 'Trim')
            this._classObj = new Trim_1.Trim(this._paramVal);
        else if (this._className === 'ParseInt')
            this._classObj = new ParseInt_1.ParseInt(this._paramVal);
    }
    execute() {
        try {
            this._classObj.processString();
            return this._classObj;
        }
        catch (exception) {
            console.log('error');
        }
    }
}
exports.GenericCommand = GenericCommand;
