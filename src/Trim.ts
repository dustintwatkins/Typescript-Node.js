import {IStringProcessor} from "./IStringProcessor";
import {LowerCase} from "./LowerCase";

export class Trim implements IStringProcessor{
    public str: string;
    private static instance: Trim;

    constructor(word:string){
        this.str = word;
    }


    static getInstance(word:string){
        if(!Trim.instance)
            Trim.instance = new Trim(word);
        return Trim.instance;
    }

    public processString():void{
        this.str = this.str.trim();
    }
}