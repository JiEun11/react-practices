ex03 : Component - React Event

01 : Inline Handler
    ex) <div onclick='click();'> 

02 : Function Handler 
  - ex03 > src > 03

03 : Synthetic Event(이벤트 합성)


04 : Event Handler 예제들
    ex) click, mousehover, etc..

05 : Event Handler with Using 'ref'(Event Handler에서 ref를 사용하기)
  - Functional Component 
  - src/05

06 : Event Handler with Using 'ref'(Event Handler에서 ref를 사용하기)
  - Class Component 
  - src/06



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