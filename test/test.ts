import localstorage from '../src';
console.log("start with localstorage test in ts");

let UI=  localstorage.getItem("userid")
console.log("ui",UI);
localstorage.setItem("userid","12345")
console.log("setting user id");
UI=  localstorage.getItem("userid")
console.log("ui",UI);