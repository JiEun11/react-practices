ex05 : Component - Life Cycle

01 : Class Component Life Cycle 
  1) Lifecycle I : mount
      [1]constructor가 실행이 된다.
      [2]getDerivedStateFromProps : props로 받아온 값을 state에 동기화한다.[react v16.3~]
      [3]render()
    * [4]componentDidMount : 컴포넌트 생성을 마치고 렌더링 작업이 끝난 후,

  2) Lifecycle II : update
      [1]getDerivedStateFromProps : props로 받아온 값을 state에 동기화한다.[react v16.3~]
      [2]shouldComponentUpdate : props나 state을 변경했을 때, 리렌더링 여부를 결정한다.
      [3]render()
      [4]getSnapshotBeforeUpdate : render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출
    * [5]componentDidUpdate : DOM update가 끝난 직후 호출된다. DOM 작업이 가능하다.

  3) Lifecycle III : Unmount
    * ComponentWillUnmount : 컴포넌트를 DOM에서 제거하기 전
  
  4) 예제
    src/01


02 : Functional Component Life Cycle(Alternative Life Cylce Methods) by useEffect Hook
  1) Alternative 01 : getDerivedStateFromProps 함수 대체
  2) Alternative 02 : After Rendering 함수 대체
  3) Alternative 03 : 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수
  4) Alternative 04 : componentDidMount & componentWillUnmount
  5) 예제
    src/02


03. Clock Component (Class Component Lifecycle 이용)
  src/03

04. Clock Component (useEffect Hook 이용) 
  src/04[과제]

1. 설치
   $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
   $ npm i react react-dom prop-types

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
