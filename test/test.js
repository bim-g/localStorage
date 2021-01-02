const localStorage = require('../src');

console.log("localStorage length: ", localStorage.length);

let UI_D = localStorage.getItem("user_id");

console.log("user_id: ", UI_D);

if (!UI_D) {
    console.log('user ID not found!','Setting the user id and token...');
    localStorage.setItem("user_id", "123456");
    localStorage.setItem("username", "johnDoe");
    localStorage.setItem("token", "Qw3rT5yui8oPlkjHg0fDsa");
} else {
    console.log('user ID:', UI_D);
    console.log('delete user ID');
    localStorage.clear();
}