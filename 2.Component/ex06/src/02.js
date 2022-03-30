import fs from 'fs';

let state = {
  order: JSON.parse(fs.readFileSync('../json/data.json').toString())  //Sync는 동기라 callback 안 써도 된다.
}

let updateOrder1 = state.order;
updateOrder1.receive = '부산시 해운대구 우동.....';

console.log(state.order, updateOrder1, state.order === updateOrder1);     // 이전, 지금 state 객체 동질 보고 -> 같으면 내부 검사, 다르면 내부 검사도 안 함.

console.log("----------------------------------------------------");

state = {
  order: JSON.parse(fs.readFileSync('../json/data.json').toString())  //Sync는 동기라 callback 안 써도 된다.
}
let updateOrder2 = Object.assign({}, state.order, {
  receive: '부산시 해운대구 우동.....'});

console.log(state.order, updateOrder2, state.order === updateOrder2);    
console.log("----------------------------------------------------");
