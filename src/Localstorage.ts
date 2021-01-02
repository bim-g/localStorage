import { error } from "console";

const {writeFile,existsSync,readFileSync,unlink} = require('fs');
class Localstorage {
    private items:any;
    // public length:number;
    constructor(){
        if (existsSync("localstorage.json")) {
            console.log("...loading data from localstorage");
            const text = readFileSync("localstorage.json","utf-8");
            this.items=JSON.parse(text);
        }else{
            this.items={};
        }    

    }
    get length(){
        return Object.keys(this.items).length;
    }

    setItem(key:string,value:string):void{
        this.items[key]=value;
        writeFile("localstorage.json",JSON.stringify(this.items),(err:any)=>{
            if(err){
                console.error(err);
            }
        });
    }
    getItem(key:string):String{
        return this.items[key];
    }
    clear():void{
        this.items={};
        unlink("localstorage.json", () => {
            console.log("localstorage File removed...");
        });
    }

}
export default  new Localstorage();