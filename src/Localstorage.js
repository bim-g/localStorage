const {writeFile,existsSync,readFileSync,unlink} = require('fs');
class Localstorage {
    constructor(){
        if (existsSync("localstorage.json")) {
            console.log("...loading data from localstorage");
            let text = readFileSync("localstorage.json");
            this.items=JSON.parse(text);
        }else{
            this.items={};
        }            
    }
    get length(){
        return Object.keys(this.items).length;
    }

    setItem(key,value){
        this.items[key]=value;
        writeFile("localstorage.json",JSON.stringify(this.items),err=>{
            if(err){
                console.error(err);
            }
        });
    }
    getItem(key){
        return this.items[key];
    }
    clear(){
        this.items={};
        unlink("localstorage.json", () => {
            console.log("localstorage File removed...");
        });
    }

}
module.exports = new Localstorage();