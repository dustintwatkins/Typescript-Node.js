import {isString} from "util";

export class Result{
    private error: boolean;

    constructor(){
        this.error = false;
    }

    public getError(): boolean{
        return this.error;
    }

    public setError(bool:boolean):void{
        this.error = bool;
    }

    public checkValue(obj:any):string{
        if(isNaN(obj))
            return 'ERROR';
        return ''
    }
}