// block scope variable (ES6)
const users = [{
  no: 1,
  name: 'bella',
  email: 'bella@gmail.com'
}, {
  no: 2,
  name: 'soo',
  email: 'soo@gmail.com'
}];

const {no} = users[0];
console.log(no);

// 객체 분해 (ES6)
// function print(o){
//   // template 문자열(ES6)
//   console.log(o.no + ", " + o.name + ", " + o.email);
//   console.log(`${ o.no}, ${ o.name}, ${ o.email}`);
// }

function print({no,name,email}){
  // template 문자열(ES6)
  console.log(o.no + ", " + o.name + ", " + o.email);
  console.log(`${no}, ${name} ${email}`);
}

// for..of (ES6)
for(let user of users){
  console.log(user);
}