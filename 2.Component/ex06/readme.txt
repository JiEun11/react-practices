## 1. immutability : 컴포넌트 상태의 불변성

1. 절대로 컴포넌트의 상태를 직접 조작하지 말 것.

2. 컴포넌트 상태를 불변으로 다루어라.

3. this.state.tasks 대신 setState이나 useState에서 반환해주는 함수를 사용해서 상태를 조작할 것.

<br>
<br>

## 2. violation Example : Class Component

> this.state.emails = [{}, {}, {}]; <br>
> let emails = this.state.emails; <br>
> emails.push({});

---

<br>
<br>

## 3. 상태를 불변성으로 유지해야 하는 이유

1. this.stat를 직접 조작하는 것은 React 상태 관리를 우외하는 것.(React Programming 방식 )
2. 성능 개선의 여지가 없어짐.

   - 객체의 변경 유무 검사시 객체의 동질성 비교는 고비용임.

   - but 객체의 동일성 비교는 저비용(object1 === object2)

3. 결론은 변경하지 말고 대체하라

---

<br>

## How I:

### 1. 비파괴 배열 메소드 및 연산자 : map, filter, reduce, concat, ...(ES6 spread operator)

### 2. src/01 참고
