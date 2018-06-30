import {IStringProcessor} from "./IStringProcessor";

export class Trim implements IStringProcessor{
    public str: string;

    constructor(word:string){
        this.str = word;
    }

    public processString():void{
        this.str = this.str.trim();
    }
}