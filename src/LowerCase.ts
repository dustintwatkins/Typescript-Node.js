import {IStringProcessor} from "./IStringProcessor";

export class LowerCase implements IStringProcessor{
    public str: string;
    
    constructor(word: string){
        this.str = word;
    }

    public processString(): void{
        this.str =  this.str.toLowerCase();
    }
}