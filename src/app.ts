import express from 'express'
import * as bodyParser from "body-parser";
import {LowerCase} from "./LowerCase";
import {Trim} from "./Trim";
import {ParseInt} from "./ParseInt";
import {GenericCommand} from "./Command";

class App {
    public express: any;

    constructor () {
        this.express = express();
        this.config();
        this.mountRoutes();
    }

    private config(): void{
        this.express.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.express.use(bodyParser.urlencoded({ extended: false }))
    }

    private mountRoutes (): void {
        const router = express.Router();


        router.get('/', (req, res) => {
          res.sendFile('/Users/DustinWatkins/Documents/BYU/Summer2018/test/public/index.html');
        });

        router.post('/toLowerCase', (req, res) =>{
            console.log('/POST toLowerCase request');
            let str = req.body.str;
            let obj = new LowerCase(str);
            obj.processString();
            res.json(obj);
        });

        router.post('/trim', (req, res) =>{
            console.log('/POST trim request');
            let str = req.body.str;
            let obj = new Trim(str);
            obj.processString();
            res.json(obj);
        });

        router.post('/parseInt', (req, res) => {
            console.log('/POST parseInt request');
            let str = req.body.str;
            let obj = new ParseInt(str);
            obj.processString();
            res.json(obj);
        });

        router.post('/command', (req, res) =>{
            console.log('/POST command request');
            let str = req.body.str;
            let type = req.body.type;

            let cmdObj = new GenericCommand(type, str);
            let obj = cmdObj.execute();
            console.log(obj);
            res.json(obj);
        });

        this.express.use('/', router)
    }
}

export default new App().express
