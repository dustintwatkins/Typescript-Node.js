import {ICommand} from "./ICommand";
import {LowerCase} from "./LowerCase";
import {Trim} from "./Trim";
import {ParseInt} from "./ParseInt";

export class GenericCommand<T> implements ICommand{
    public _className: string;
    public _paramVal: string;
    public _classObj: any;

    public constructor(className:string, paramVals: string){
        this._className = className;
        this._paramVal = paramVals;
        this.initializeClass();
    }

    public initializeClass(){
        if(this._className === 'LowerCase')
            this._classObj = new LowerCase(this._paramVal);
        else if(this._className === 'Trim')
            this._classObj = new Trim(this._paramVal);
        else if(this._className === 'ParseInt')
            this._classObj = new ParseInt(this._paramVal);
    }

    public execute():void{
        try{
          console.log('executing...');
          this._classObj.processString();
          return this._classObj.str;
        } catch(exception){
            console.log('error');
        }
    }

}
