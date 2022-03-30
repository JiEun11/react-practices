import fs from 'fs';

let state = {
  order: JSON.parse(fs.readFileSync('../json/data.json').toString())  //Sync는 동기라 callback 안 써도 된다.
}

console.log(state);

const updateProducts1 = state.order.products;
updateProducts1.push({
  "no": "c002-003",
  "name": "니삭스",
  "price": 3000,
  "amount": 1
});
console.log(state.products, updateProducts1, state.order.products === updateProducts1);

console.log("=================================================");
state = {
  order: JSON.parse(fs.readFileSync('../json/data.json').toString())  //Sync는 동기라 callback 안 써도 된다.
}
const updateProducts2 = state.order.products.concat({
  "no": "c002-003",
  "name": "니삭스",
  "price": 3000,
  "amount": 1
});
console.log(state.products, updateProducts2, state.order.products === updateProducts2);

console.log("=================================================");
state = {
  order: JSON.parse(fs.readFileSync('../json/data.json').toString())  //Sync는 동기라 callback 안 써도 된다.
}
const updateProducts3 = [...state.order.products, {
  "no": "c002-003",
  "name": "니삭스",
  "price": 3000,
  "amount": 1
}];
console.log(state.products, updateProducts3, state.order.products === updateProducts3);