ex04 : Component - State

01 : 기본 개념
  1. state
    - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
    - 컴포넌트는 this.state 안에 여러 데이터(상태)를 가질 수 있다.
    - this.state은 특정 컴포넌트 전용이며 변경을 위해서는 setState을 함수를 사용
    - 상태가 업데이트 되면 컴포넌트의 반응형(Reactive) Rendering이 트리거 되고 컴포넌트와 자식 컴포넌트가 다시 Rendering이 된다.
    - Component의 동작(event)과 상호작용을 수행할 수 있는 매커니즘을 제공한다.
    - Class Component에서는 constructor에서 초기화를 한다.
    - Class Component에서 상태 변경을 위해서는 setState 함수를 사용
    - Functional Component에서는 usetState hook 함수를 사용하여 초기화 한다.
    - Functional Component에서 상태 변경을 위해 useState hook 함수를 사용하고 반환된 배열의 두번째 배열 요소를 사용한다.
  2. 예제 : src/01


02 : 제어 Component
  src/02 : 제어 component
  src/03 : 비제어 component


03 : 상태(Stateful) Component vs 순수(Pure, Dumb) Component
  emaillist


1. 설치
   $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
   $ npm i react react-dom

2. 설정
   config/babel.config.json
   config/webpack.config.js

3. 스크립트 추가하기
   "scripts": {
   "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
   "build": "npx webpack"
   }

실행
$ npm run debug src={01|02|03|04|..} (css-module은 무조건 true로 할꺼니까 이제 필요X)
