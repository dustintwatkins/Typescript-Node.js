import {IStringProcessor} from "./IStringProcessor";
import {Result} from "./Result";


export class ParseInt implements IStringProcessor{
    public str: string;
    private num: number;
    public res: Result;
    public errorString: string;
    private type = 'ParseInt';

    constructor(word: string){
        this.str = word;
        this.num = 0;
        this.res = new Result();
        this.errorString = '';
    }

    public processString(): void{
        this.errorString = this.res.checkValue(this.str);
        if(this.errorString !== '')
            return;
        else
            this.num = parseInt(this.str);
    }


}