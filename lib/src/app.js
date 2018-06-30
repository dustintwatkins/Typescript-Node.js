"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const LowerCase_1 = require("./LowerCase");
const Trim_1 = require("./Trim");
const ParseInt_1 = require("./ParseInt");
const Command_1 = require("./Command");
class App {
    constructor() {
        this.express = express_1.default();
        this.config();
        this.mountRoutes();
    }
    config() {
        this.express.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    mountRoutes() {
        const router = express_1.default.Router();
        router.get('/', (req, res) => {
            res.sendFile('/Users/DustinWatkins/Documents/BYU/Summer2018/test/public/index.html');
        });
        router.post('/toLowerCase', (req, res) => {
            console.log('/POST toLowerCase request');
            let str = req.body.str;
            let obj = new LowerCase_1.LowerCase(str);
            obj.processString();
            res.json(obj);
        });
        router.post('/trim', (req, res) => {
            console.log('/POST trim request');
            let str = req.body.str;
            let obj = new Trim_1.Trim(str);
            obj.processString();
            res.json(obj);
        });
        router.post('/parseInt', (req, res) => {
            console.log('/POST parseInt request');
            let str = req.body.str;
            let obj = new ParseInt_1.ParseInt(str);
            obj.processString();
            res.json(obj);
        });
        router.post('/command', (req, res) => {
            console.log('/POST command request');
            let str = req.body.str;
            let type = req.body.type;
            let cmdObj = new Command_1.GenericCommand(type, str);
            let obj = {
                str: cmdObj.execute(),
                type: type
            };
            res.json(obj);
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
