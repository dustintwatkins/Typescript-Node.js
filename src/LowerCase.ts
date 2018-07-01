import {IStringProcessor} from "./IStringProcessor";

export class LowerCase implements IStringProcessor{
    public str: string;
    private static instance: LowerCase;
    
    constructor(word: string){
        this.str = word;
    }

    static getInstance(word:string){
        if(!LowerCase.instance)
            LowerCase.instance = new LowerCase(word);
        return LowerCase.instance;
    }

    public processString(): void{
        this.str =  this.str.toLowerCase();
    }
}

