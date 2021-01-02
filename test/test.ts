import localstorage from '../src';
console.log("start with localstorage test in ts");

let UI=  localstorage.getItem("userid")
console.log("ui",UI);
localstorage.setItem("userid","12345")
localstorage.setItem("username","ibrahim")
localstorage.setItem("token","1awDrgyJ2ZscFvHNk")
console.log("setting user id");
UI=  localstorage.getItem("userid")
console.log("ui",UI);