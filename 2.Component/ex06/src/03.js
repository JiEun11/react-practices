import fs from 'fs';

let state = {
  order: JSON.parse(fs.readFileSync('../json/data.json').toString())  //Sync는 동기라 callback 안 써도 된다.
}

let updateOrder = Object.assign({}, state.order, {
  receive: '부산시 해운대구 우동...'
});

updateOrder.payment.method = 'Mobile';

console.log(
  state.order,
  updateOrder,
  state.order === updateOrder,
  state.order.receive === updateOrder.receive,
  state.order.payment === updateOrder.payment);