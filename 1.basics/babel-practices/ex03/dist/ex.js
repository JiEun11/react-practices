// block scope variable (ES6)
var users = [{
  no: 1,
  name: 'bella',
  email: 'bella@gmail.com'
}, {
  no: 2,
  name: 'soo',
  email: 'soo@gmail.com'
}]; // 객체 분해 (ES6)
// function print(o){
//   // template 문자열(ES6)
//   console.log(o.no + ", " + o.name + ", " + o.email);
//   console.log(`${ o.no}, ${ o.name}, ${ o.email}`);
// }

function print(no, name, email) {
  // template 문자열(ES6)
  console.log("".concat(no, ", ").concat(name, " ").concat(email));
} // for..of (ES6)


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  console.log(user);
}
