import fs from 'fs';
import update from 'react-addons-update';

let state = {
  order: JSON.parse(fs.readFileSync('../json/data.json').toString())  //Sync는 동기라 callback 안 써도 된다.
}

// let updateOrder = Object.assign({}, state.order, {
//   receive: '부산시 해운대구 우동...'
// });

let updateOrder = update(state.order, {
  // 해당 path의 값 변경 예제1
  receive: {
    $set: '부산시 해운대구 우동'
  },

  // 해당 path의 값 변경 예제2
  payment: {
    method: {
      $set: 'Mobile'
    }
  },
  products: {
    // 배열 요소 변경(index로 찾아야함)
    0: {
      amount: {
        $set: 5
      }
    },// kanbanboard에서는 Array.indexOf로 찾던지 filter로 찾던지
    // 배열 요소 추가
    $push: [{
      "no": "c002-003",
      "name": "니삭스",
      "price": 2000,
      "amount" : 1
    }]
  }
});
// updateOrder.payment.method = 'Mobile';

console.log(
  state.order,
  updateOrder,
  state.order === updateOrder,
  state.order.receive === updateOrder.receive,
  state.order.payment === updateOrder.payment);