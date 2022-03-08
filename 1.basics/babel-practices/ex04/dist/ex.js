"use strict";

// block scope variable (ES6)
var users = [{
  no: 1,
  name: 'bella',
  email: 'bella@gmail.com'
}, {
  no: 2,
  name: 'soo',
  email: 'soo@gmail.com'
}];
var no = users[0].no;
console.log(no); // 객체 분해 (ES6)
// function print(o){
//   // template 문자열(ES6)
//   console.log(o.no + ", " + o.name + ", " + o.email);
//   console.log(`${ o.no}, ${ o.name}, ${ o.email}`);
// }

function print(_ref) {
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
  // template 문자열(ES6)
  console.log(o.no + ", " + o.name + ", " + o.email);
  console.log("".concat(no, ", ").concat(name, " ").concat(email));
} // for..of (ES6)


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  console.log(user);
}
