"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('fs'), writeFile = _a.writeFile, existsSync = _a.existsSync, readFileSync = _a.readFileSync, unlink = _a.unlink;
var Localstorage = /** @class */ (function () {
    // public length:number;
    function Localstorage() {
        if (existsSync("localstorage.json")) {
            console.log("...loading data from localstorage");
            var text = readFileSync("localstorage.json", "utf-8");
            console.log(text);
            this.items = JSON.parse(text);
        }
        else {
            this.items = {};
        }
    }
    Object.defineProperty(Localstorage.prototype, "length", {
        get: function () {
            return Object.keys(this.items).length;
        },
        enumerable: true,
        configurable: true
    });
    Localstorage.prototype.setItem = function (key, value) {
        this.items[key] = value;
        writeFile("localstorage.json", JSON.stringify(this.items), function (err) {
            if (err) {
                console.error(err);
            }
        });
    };
    Localstorage.prototype.getItem = function (key) {
        return this.items[key];
    };
    Localstorage.prototype.clear = function () {
        this.items = {};
        unlink("localstorage.json", function () {
            console.log("localstorage File removed...");
        });
    };
    return Localstorage;
}());
exports.default = new Localstorage();
